const container = {
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#8568ff",
  height: "400px",
  color: "white",
  boxShadow: "0px 0px 8px black",
  justifyContent: "space-evenly",
  alignItems: "center",
  marginBottom: "30px",
};

export default function TopContainer() {
  return (
    <div style={container}>
      <h3>
        Products for every need, at the <h3> distance of a click </h3>
      </h3>
      <img
        src="https://i.imgur.com/2j8aR3I.jpeg"
        alt="main-img"
        style={{ width: 250, borderRadius: "5%" }}
      />
    </div>
  );
}
