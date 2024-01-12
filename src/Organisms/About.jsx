import ProfilePicture from "../Atoms/ProfilePicture";
import Description from "../Molecules/Description";

export default function About() {
  return (
    <div className="md:flex md:px-10">
      <ProfilePicture />
      <Description />
    </div>
  );
}
