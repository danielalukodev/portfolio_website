import avatarImg from "../assets/avatar.png";

export default function AvatarCard() {
  return (
    <div className="bg-[#1a1a1c] border border-[#2a2a2c] rounded-xl p-5 flex justify-center items-center min-h-[140px]">
      <img
        src={avatarImg}
        alt="Daniel Clarke"
        className="w-32 h-32 rounded-full object-cover"
      />
    </div>
  );
}
