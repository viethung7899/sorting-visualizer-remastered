import './Visualizer.scss';

const randomArray = (length, max) => {
  return Array(length)
    .fill()
    .map(() => Math.round(Math.random() * max));
};

const Visualizer = (props) => {
  const array = randomArray(50, 100);

  return (
    <div class="hero-body p-0 visualize-container">
      {array.map((data) => {
        return (
          <div
            className="node has-background-light"
            style={{ height: `${(data / 100) * 90}vh` }}
          ></div>
        );
      })}
    </div>
  );
};

export default Visualizer;
