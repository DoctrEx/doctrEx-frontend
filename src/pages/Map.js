import React from "react";
import { GoogleMap, Circle, Marker } from "@react-google-maps/api";
import { useLoadScript } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

export default function GoogleMaps() {
  const { isLoaded, loadError } = useLoadScript({
    // Uncomment the line below and add your API key
    googleMapsApiKey: "AIzaSyCI1_gTAMiklKuDVArJ8AxfK2FUOA1S9jc",
  });
  const navigate = useNavigate();

  if (loadError) return "Error loading Maps";
  if (!isLoaded) return "Loading Maps";

  // const marker = [
  //   <Marker position={{ lat: 24.982400000000002, lng: 67.0627 },
  //   <Marker position={{ lat: 25.032400000000003, lng: 67.01270000000001 },
  //   <Marker position={{ lat: 25.082400000000003, lng: 66.96270000000001 },
  //   <Marker position={{ lat: 25.132400000000004, lng: 66.91270000000002 },
  //   <Marker position={{ lat: 25.182400000000005, lng: 66.86270000000002 },
  //   <Marker position={{ lat: 25.232400000000005, lng: 66.81270000000002 },
  //   <Marker position={{ lat: 25.282400000000006, lng: 66.76270000000002 },
  //   <Marker position={{ lat: 25.332400000000007, lng: 66.71270000000003 },
  //   <Marker position={{ lat: 25.382400000000008, lng: 66.66270000000003 },
  //   <Marker position={{ lat: 25.43240000000001, lng: 66.61270000000003 },
  //   <Marker position={{ lat: 25.48240000000001, lng: 66.56270000000004 },
  //   <Marker position={{ lat: 25.53240000000001, lng: 66.51270000000004 },
  //   <Marker position={{ lat: 25.58240000000001, lng: 66.46270000000004 },
  //   <Marker position={{ lat: 25.63240000000001, lng: 66.41270000000004 },
  //   <Marker position={{ lat: 25.682400000000012, lng: 66.36270000000005 },
  //   <Marker position={{ lat: 25.732400000000013, lng: 66.31270000000005 },
  //   <Marker position={{ lat: 25.782400000000013, lng: 66.26270000000005 },
  //   <Marker position={{ lat: 25.832400000000014, lng: 66.21270000000005 },
  //   <Marker position={{ lat: 25.882400000000015, lng: 66.16270000000006 },
  //   <Marker position={{ lat: 25.932400000000015, lng: 66.11270000000006 },
  //   <Marker position={{ lat: 26.032400000000017, lng: 66.01270000000007 },
  //   <Marker position={{ lat: 26.082400000000018, lng: 65.96270000000007 },
  //   <Marker position={{ lat: 26.13240000000002, lng: 65.91270000000007 },
  //   <Marker position={{ lat: 26.18240000000002, lng: 65.86270000000007 },
  // ];
  // const read = [
  //   <Marker position={{ lat: 31.839172274890338, lng: 70.65043234548538 },
  //   <Marker position={{ lat: 29.97164672353008, lng: 74.2152858966032 },
  //   <Marker position={{ lat: 30.666566535047345, lng: 72.00579361319225 },
  //   <Marker position={{ lat: 30.1873340100343, lng: 71.0592030053592 },
  //   <Marker position={{ lat: 32.88756197727074, lng: 71.63754176630823 },
  //   <Marker position={{ lat: 29.241626381974154, lng: 73.85536108811847 },
  //   <Marker position={{ lat: 29.196936421354902, lng: 74.93306266288806 },
  //   <Marker position={{ lat: 28.72004824730222, lng: 73.73819583572147 },
  //   <Marker position={{ lat: 32.71402513650517, lng: 73.32972403153042 },
  //   <Marker position={{ lat: 29.68928524220279, lng: 70.58851046214524 },
  //   <Marker position={{ lat: 31.950342057520675, lng: 75.07688404081894 },
  //   <Marker position={{ lat: 28.756575309919832, lng: 74.23059946728019 },
  //   <Marker position={{ lat: 29.632376398839273, lng: 72.76808370290219 },
  //   <Marker position={{ lat: 31.507404663180047, lng: 70.66124574368001 },
  //   <Marker position={{ lat: 33.27288553509127, lng: 73.12653274035641 },
  //   <Marker position={{ lat: 31.261932933711908, lng: 70.59388555755895 },
  //   <Marker position={{ lat: 29.26651820468962, lng: 74.09306633730934 },
  //   <Marker position={{ lat: 33.064895990578485, lng: 70.49740279029244 },
  //   <Marker position={{ lat: 32.838841916666006, lng: 74.95539329953021 },
  //   <Marker position={{ lat: 31.39368579966949, lng: 70.47458409359356 },
  //   <Marker position={{ lat: 31.181416638785407, lng: 73.25346299487865 },
  //   <Marker position={{ lat: 30.550581214306003, lng: 73.13629938077541 },
  //   <Marker position={{ lat: 28.728471924347474, lng: 70.85357308100306 },
  //   <Marker position={{ lat: 30.918638676873698, lng: 71.15771938142186 },
  //   <Marker position={{ lat: 28.394302346547395, lng: 73.28668136298464 },
  // ];
  const containerStyle = {
    width: "400px",
    height: "400px",
  };
  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={11}
      // center={ lat: 24.9324, lng: 67.1127 }
      center={{ lat: 30.556575309919832, lng: 74.23059946728019 }}
    >
      {/* <Marker position={{ lat: 24.93, lng: 67.1153 }} /> */}
      {/* <Marker position={{ lat: 31.839, lng: 70.65 }} /> */}
      {/* <div className="check">
        <Circle
          icon={{
            url: `/assets/${localStorage.getItem("profilePicture")}`,
            scaledSize: new window.google.maps.Size(25, 25),
          }}
          center={{
            lat: 28.756575309919832,
            lng: 74.23059946728019,
          }}
          radius={1500}
        ></Circle>
      </div> */}

      <Marker
        position={{ lat: 30.556575309919832, lng: 74.23059946728019 }}
        animation={window.google.maps.Animation.BOUNCE}
        shape={"MarkerShapeCircle"}
        icon={{
          url: `/assets/${localStorage.getItem("profilePicture")}`,
          scaledSize: new window.google.maps.Size(50, 50),
        }}
      />

      {/* <Marker
        position={{ lat: 30.556575309919832, lng: 74.23059946728019 }}
        animation={window.google.maps.Animation.BOUNCE}
      /> */}
      <Marker position={{ lat: 30.666566535047345, lng: 72.00579361319225 }} />

      <Marker
        onClick={() => {
          navigate("/appointment/confirm/1");
        }}
        icon={{
          url: `/assets/dr.1.jpg`,
          scaledSize: new window.google.maps.Size(50, 50),
        }}
        position={{ lat: 30.1873340100343, lng: 71.0592030053592 }}
      />
      <Marker
        onClick={() => {
          navigate("/appointment/confirm/2");
        }}
        icon={{
          url: `/assets/dr.2.jpg`,
          scaledSize: new window.google.maps.Size(50, 50),
        }}
        position={{ lat: 29.241626381974154, lng: 73.85536108811847 }}
      />
      <Marker
        onClick={() => {
          navigate("/appointment/confirm/3");
        }}
        icon={{
          url: `/assets/dr.3.jpg`,
          scaledSize: new window.google.maps.Size(50, 50),
        }}
        position={{ lat: 29.196936421354902, lng: 74.93306266288806 }}
      />
      <Marker
        onClick={() => {
          navigate("/appointment/confirm/4");
        }}
        icon={{
          url: `/assets/dr.4.jpg`,
          scaledSize: new window.google.maps.Size(50, 50),
        }}
        position={{ lat: 32.88756197727074, lng: 71.63754176630823 }}
      />
      <Marker
        onClick={() => {
          navigate("/appointment/confirm/5");
        }}
        icon={{
          url: `/assets/dr.5.jpg`,
          scaledSize: new window.google.maps.Size(50, 50),
        }}
        position={{ lat: 28.72004824730222, lng: 73.73819583572147 }}
      />
      <Marker
        onClick={() => {
          navigate("/appointment/confirm/6");
        }}
        icon={{
          url: `/assets/dr.6.jpg`,
          scaledSize: new window.google.maps.Size(50, 50),
        }}
        position={{ lat: 32.71402513650517, lng: 73.32972403153042 }}
      />
      <Marker
        onClick={() => {
          navigate("/appointment/confirm/7");
        }}
        icon={{
          url: `/assets/dr.7.jpg`,
          scaledSize: new window.google.maps.Size(50, 50),
        }}
        position={{ lat: 29.68928524220279, lng: 70.58851046214524 }}
      />
      <Marker
        onClick={() => {
          navigate("/appointment/confirm/8");
        }}
        icon={{
          url: `/assets/dr.8.jpg`,
          scaledSize: new window.google.maps.Size(50, 50),
        }}
        position={{ lat: 31.950342057520675, lng: 75.07688404081894 }}
      />
      <Marker
        onClick={() => {
          navigate("/appointment/confirm/9");
        }}
        icon={{
          url: `/assets/dr.9.jpg`,
          scaledSize: new window.google.maps.Size(50, 50),
        }}
        position={{ lat: 28.756575309919832, lng: 74.23059946728019 }}
      />
      <Marker
        onClick={() => {
          navigate("/appointment/confirm/10");
        }}
        icon={{
          url: `/assets/dr.10.jpg`,
          scaledSize: new window.google.maps.Size(50, 50),
        }}
        position={{ lat: 29.632376398839273, lng: 72.76808370290219 }}
      />
      <Marker
        onClick={() => {
          navigate("/appointment/confirm/11");
        }}
        icon={{
          url: `/assets/dr.11.jpg`,
          scaledSize: new window.google.maps.Size(50, 50),
        }}
        position={{ lat: 31.507404663180047, lng: 70.66124574368001 }}
      />
      <Marker
        onClick={() => {
          navigate("/appointment/confirm/12");
        }}
        icon={{
          url: `/assets/dr.12.jpg`,
          scaledSize: new window.google.maps.Size(50, 50),
        }}
        position={{ lat: 33.27288553509127, lng: 73.12653274035641 }}
      />
      <Marker
        onClick={() => {
          navigate("/appointment/confirm/13");
        }}
        icon={{
          url: `/assets/dr.13.jpg`,
          scaledSize: new window.google.maps.Size(50, 50),
        }}
        position={{ lat: 31.261932933711908, lng: 70.59388555755895 }}
      />
      <Marker
        onClick={() => {
          navigate("/appointment/confirm/14");
        }}
        icon={{
          url: `/assets/dr.14.jpg`,
          scaledSize: new window.google.maps.Size(50, 50),
        }}
        position={{ lat: 29.26651820468962, lng: 74.09306633730934 }}
      />
      <Marker
        onClick={() => {
          navigate("/appointment/confirm/15");
        }}
        icon={{
          url: `/assets/dr.15.jpg`,
          scaledSize: new window.google.maps.Size(50, 50),
        }}
        position={{ lat: 33.064895990578485, lng: 70.49740279029244 }}
      />
      <Marker
        onClick={() => {
          navigate("/appointment/confirm/16");
        }}
        icon={{
          url: `/assets/dr.16.jpg`,
          scaledSize: new window.google.maps.Size(50, 50),
        }}
        position={{ lat: 32.838841916666006, lng: 74.95539329953021 }}
      />
      <Marker
        onClick={() => {
          navigate("/appointment/confirm/17");
        }}
        icon={{
          url: `/assets/dr.17.jpg`,
          scaledSize: new window.google.maps.Size(50, 50),
        }}
        position={{ lat: 31.39368579966949, lng: 70.47458409359356 }}
      />
      <Marker
        onClick={() => {
          navigate("/appointment/confirm/18");
        }}
        icon={{
          url: `/assets/dr.18.jpg`,
          scaledSize: new window.google.maps.Size(50, 50),
        }}
        position={{ lat: 31.181416638785407, lng: 73.25346299487865 }}
      />
      <Marker
        onClick={() => {
          navigate("/appointment/confirm/19");
        }}
        icon={{
          url: `/assets/dr.19.jpg`,
          scaledSize: new window.google.maps.Size(50, 50),
        }}
        position={{ lat: 30.550581214306003, lng: 73.13629938077541 }}
      />
      <Marker
        onClick={() => {
          navigate("/appointment/confirm/20");
        }}
        icon={{
          url: `/assets/dr.20.jpg`,
          scaledSize: new window.google.maps.Size(50, 50),
        }}
        position={{ lat: 28.728471924347474, lng: 70.85357308100306 }}
      />
      <Marker
        onClick={() => {
          navigate("/appointment/confirm/21");
        }}
        icon={{
          url: `/assets/dr.21.jpg`,
          scaledSize: new window.google.maps.Size(50, 50),
        }}
        position={{ lat: 30.918638676873698, lng: 71.15771938142186 }}
      />
      <Marker
        onClick={() => {
          navigate("/appointment/confirm/22");
        }}
        icon={{
          url: `/assets/dr.22.jpg`,
          scaledSize: new window.google.maps.Size(50, 50),
        }}
        position={{ lat: 28.394302346547395, lng: 73.28668136298464 }}
      />
      {/* <Marker position= {position={{<Marker position={{ lat: 24.9324, lng: 49.1127 }}} />
      <Marker position= {position={{<Marker position={{ lat: 24.9324, lng: 67.1127 }}} />
      <Marker position= {position={{<Marker position={{ lat: 24.9324, lng: 67.1127 }}} /> */}
      {/* {marks.map((marker) => (
        <Marker position=
{          position={{<Marker position={{ lat: marker.lat, lng: marker.lng }}
          key={marker.id}
       } />
      ))} */}
      {/* {marker.forEach((item) => {
        <Marker position= {position={{<Marker position={{ lat: item.lat, lng: item.lng }}} />;
      })} */}
    </GoogleMap>
  );
}
