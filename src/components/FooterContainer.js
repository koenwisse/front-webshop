const fcontainer = {
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#0D0E43",
  height: "200px",
  color: "#8A8FB9",
  justifyContent: "space-evenly",
  alignItems: "center",
};

export default function FooterContainer() {
  return (
    <div style={fcontainer}>
      <b>Footer</b>
    </div>
  );
}
