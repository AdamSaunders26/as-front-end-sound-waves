import { ago } from "@/app/utils";

function CommentCard(props: Comment[]): React.ReactElement {

  return (
    <div className="p-4 w-full shadow border rounded-xl bg-white flex flex-col space-y-2">
      <div className="flex items-center space-x-1">
        <img className="w-8 h-8 rounded-full" src={props.comment.avatar_url}></img>
        <p className="text-sm font-medium truncate text-neutral-700">
          {props.comment.username}
        </p>
        <span className="text-neutral-300">•</span>
        <p className="text-sm font-light text-neutral-500">
          {ago(new Date(props.comment.created_at))}
        </p>
      </div>
      <p>{props.comment.comment}</p>
      <div className="flex justify-end space-x-4">
        <div className="flex items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-neutral-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <p className="text-sm text-neutral-500">{props.comment.likes}</p>
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
