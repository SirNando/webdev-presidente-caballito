import pfp from "/profile-picture.png";

export default function ProfilePicture() {
  return <img src={pfp} className="rounded-full w-[80%] h-auto mx-auto my-4 shadow-lg md:w-1/3"/>;
}
