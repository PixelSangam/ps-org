const Service = (props) => {
  const { name, photo, about } = props;

  return (
    <div className="service">
      <div className="service__imgbox">
        <img src={photo} alt={name} className="el-ser-img" />
      </div>
      <div className="service__namebox">
        <h2 className="el-ser-name">{name}</h2>
      </div>
      <div className="service__about">
        <p className="el-ser-about">{about} </p>
      </div>
    </div>
  );
};

export default Service;
