import MsgIcon from "../assets/msg.png";
import NotificationIcon from "../assets/notification.png";

function TopBarActions({ userName = "Andrew Forbist", avatarUrl }) {
  return (
    <div className="flex items-center gap-5">
      {/* Message icon */}
      <button
        aria-label="Messages"
        className="flex h-2 w-10 items-center justify-center rounded-full  hover:bg-[#F5F9F4] transition-colors"
      >
        <img src={MsgIcon} alt="Messages" className="h-8 w-8 object-contain" />
      </button>

      {/* Notification icon */}
      <button
        aria-label="Notifications"
        className="flex h-2 w-10 items-center justify-center rounded-full  hover:bg-[#F5F9F4] transition-colors"
      >
        <img
          src={NotificationIcon}
          alt="Notifications"
          className="h-8 w-8 object-contain"
        />
      </button>

      {/* User Info */}
      <div className="flex items-center gap-2 pl-1">
        <span className="text-[18px] font-medium text-[#173B2A]">
          {userName}
        </span>
        <div className="h-8 w-8 rounded-full bg-[#B6E4A0] overflow-hidden">
          {avatarUrl && (
            <img
              src={avatarUrl}
              alt={userName}
              className="h-full w-full object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default TopBarActions;