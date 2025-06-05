import {
    BsArrowUpRightCircle,
    BsCheckSquare,
    BsExclamationTriangle,
    BsXCircle,
  } from "react-icons/bs";
  import Button from "../components/Button";
  
  function ButtonPage() {
    return (
      <div className="p-4 space-y-4">
        <div>
          <Button primary>
            Primary
            <BsArrowUpRightCircle />
          </Button>
        </div>
        <div>
          <Button secondary>
            Secondary <BsArrowUpRightCircle />
          </Button>
        </div>
        <div>
          <Button success>
            Success <BsCheckSquare />
          </Button>
        </div>
        <div>
          <Button warning outline>
            Warning <BsExclamationTriangle />
          </Button>
        </div>
        <div>
          <Button danger rounded>
            Danger <BsXCircle />
          </Button>
        </div>
      </div>
    );
  }
  
  export default ButtonPage;
  