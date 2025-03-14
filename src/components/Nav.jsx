import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/html"><button>HTML</button></Link>
      <Link to="/css"><button>CSS</button></Link>
      <Link to="/javascript"><button>JavaScript</button></Link>
      <Link to="/react"><button>React</button></Link>
      <Link to="/headless-cms"><button>Sanity and headless CMS</button></Link>
    </nav>
  );
}
