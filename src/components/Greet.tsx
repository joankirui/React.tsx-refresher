// Use types when building applications and interfaces when building libraries
type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name} You have ${props.messageCount} unread messages`
          : `Welcome Guest`}
      </h2>
    </div>
  );
};
