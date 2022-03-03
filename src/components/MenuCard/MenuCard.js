import "./MenuCard.css";

export default function App(props) {
  const path = props.data.recipe.images.THUMBNAIL.url;
  return (
    <div className="card">
      <p>{props.data.recipe.label}</p>
      <div
        className="menuimage"
        onClick={() => {
          //console.log(props.data.recipe.label);
          props.childToParent(props.data._links.self.href);
        }}
      >
        <img height="100px" width="150px" src={path} alt="not found" />
      </div>
    </div>
  );
}
