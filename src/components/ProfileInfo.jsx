export const ProfileInfo = ({ name, location, education }) => {
  return (
    <>
      <hr />
      <div className="text-profile">
        <span>Nombre completo:</span>
        <p className="username text-uppercase">{name}</p>
      </div>

      <div className="text-profile">
        <span>Ubicación</span>
        <p className="username ">{location}</p>
      </div>
      <div className="text-profile">
        <span>Educación:</span>
        <p className="username ">{education}</p>
      </div>
    </>
  );
};
