import "./blue-block.css";

export default function BlueBlock(props) {
  return (
    <div className="blue-block">
      <div
        className="blue-block-left"
        id="history"
        style={{
          backgroundImage: 'url("/imgs/backgrounds/bg-blue-сopy.png")',
        }}
      >
        {props.left}
      </div>
      <div className="blue-block-right">{props.right}</div>
    </div>
  );
}
