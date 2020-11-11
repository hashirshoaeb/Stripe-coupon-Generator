const Tile =({data, handleDelete}) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-8">
            <h5>
              {data.name}
            </h5>
          </div>
          <div className="col-md-4 btn btn-danger" onClick={handleDelete}>Delete</div>
        </div>
      </div>
    </div>
  );
}

export default Tile;