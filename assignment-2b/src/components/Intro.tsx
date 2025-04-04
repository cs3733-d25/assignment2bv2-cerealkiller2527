type IntroProps = {
    name1: string;
    name2: string;
  };
  
  function Intro({ name1, name2 }: IntroProps) {
    return (
      <p>
        Hi! We're {name1} and {name2}. We're working together on this React assignment and having fun learning it!
      </p>
    );
  }
  
  export default Intro;
  