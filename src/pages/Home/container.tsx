import React from "react";
import MaskAgent from "~/agents/mask";
import Home from "./Home";

interface State {
  loading: boolean;
}

class Container extends React.Component<{}, State> {
  private mapRef: React.RefObject<HTMLDivElement> = React.createRef();

  private markers: any = [];

  private infowindows: any = [];

  constructor(props: {}) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    if (this.mapRef.current) {
      const { kakao } = window as any;

      navigator.geolocation.getCurrentPosition(res => {
        const options = {
          center: new kakao.maps.LatLng(
            res.coords.latitude,
            res.coords.longitude
          ),
          level: 4
        };
        const map = new kakao.maps.Map(this.mapRef.current, options);
        this.addMarkers(map, res.coords.latitude, res.coords.longitude);

        kakao.maps.event.addListener(map, "dragend", () => {
          if (!this.state.loading) {
            const { Ga, Ha } = map.getCenter();
            this.removeAllMarkers().then(() => {
              this.addMarkers(map, Ha, Ga);
            });
          }
        });
      });
    }
  }

  removeAllMarkers = () => {
    const { kakao } = window as any;
    return new Promise(done => {
      this.markers.forEach((m: any) => {
        m.setMap(null);
        kakao.maps.event.removeListener(m, "click");
      });
      this.infowindows.forEach((i: any) => {
        i.close();
      });

      this.markers = [];
      this.infowindows = [];

      done();
    });
  };

  addMarkers = (map: any, lat: any, lng: any) => {
    const { kakao } = window as any;
    this.setState({ loading: true }, () => {
      MaskAgent.getByGeo(lat, lng, 500).then(res => {
        res.data.stores.forEach((d: any) => {
          const marker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(d.lat, d.lng),
            clickable: true
          });

          marker.setMap(map);
          const iwContent = `<div><p>주소 : </p> <p>${d.addr}</p></div> 
                           <div><p>재고 상태 : </p> <p>${this.getRemainStat(
                             d.remain_stat
                           )}</p></div>
                           <div><p>입고 시간 : </p> <p>${d.stock_at}</p></div>
                           <div><p>판매처 유형 : </p> <p>${this.getType(
                             d.type
                           )}</p></div>`,
            iwPosition = new kakao.maps.LatLng(d.lat, d.lng);

          const infowindow = new kakao.maps.InfoWindow({
            position: iwPosition,
            content: iwContent
          });

          kakao.maps.event.addListener(marker, "click", () => {
            this.onMarkerClick(infowindow, map, marker);
          });

          this.markers.push(marker);
          this.infowindows.push(infowindow);
          this.setState({ loading: false });
        });
      });
    });
  };

  onMarkerClick = (infowindow: any, map: any, marker: any) => {
    this.infowindows.forEach((i: any) => {
      i.close();
    });

    infowindow.open(map, marker);
  };

  getType = (type: string | null) => {
    switch (type) {
      case "01":
        return "약국";
      case "02":
        return "우체국";
      case "03":
        return "농협";
      default:
        return "--";
    }
  };

  getRemainStat = (stat: string | null) => {
    switch (stat) {
      case "plenty":
        return "100개 이상";
      case "some":
        return "30개 이상 100개미만";
      case "few":
        return "2개 이상 30개 미만";
      default:
        return "1개 이하";
    }
  };

  render() {
    return <Home mapRef={this.mapRef} loading={this.state.loading} />;
  }
}

export default Container;
