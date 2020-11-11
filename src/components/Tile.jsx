const Tile =({data}) => {
  console.log(data);
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col">{data.name}</div>
        </div>
      </div>
    </div>
  );
}

export default Tile;