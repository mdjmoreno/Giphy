import "./GifItem.css";

export default function GifItem({ data, ...props }) {
  return (
    <div role="button" className="container" {...props}>
      <img src={data?.images?.original?.url} alt={data?.title} />
    </div>
  );
}
