import { Card } from "react-bootstrap";
import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";

const HardwareFilter = ({ onData }: { onData: any }) => {
  const [show, setShow] = useState(true);

  const sendDataToParent = (data: any) => {
    onData(data);
  };

  return (
    <div className="mb-3">
      <Card className="p-2 rounded-4">
        <Card.Body>
          <span className="d-flex w-100">
            <h5 className="theme-font w-75 m-0">Hardware Category</h5>
            <span className="w-25 d-flex justify-content-end align-items-center">
              <BiChevronDown onClick={() => setShow(!show)} />
            </span>
          </span>
          {show && (
            <form className="mt-2">
              <div className="d-flex py-1">
                <input
                  onClick={(e: any) =>
                    e.target.checked
                      ? sendDataToParent("Other")
                      : sendDataToParent("")
                  }
                  type="checkbox"
                  className="form-check-input"
                />
                <label className="text-muted fs-7 ms-2">Other (75)</label>
              </div>
              <div className="d-flex py-1">
                <input
                  onClick={(e: any) =>
                    e.target.checked
                      ? sendDataToParent("Desktop")
                      : sendDataToParent("")
                  }
                  type="checkbox"
                  className="form-check-input"
                />
                <label className="text-muted fs-7 ms-2">Desktop (3)</label>
              </div>
              <div className="d-flex py-1">
                <input
                  onClick={(e: any) =>
                    e.target.checked
                      ? sendDataToParent("Laptop")
                      : sendDataToParent("")
                  }
                  type="checkbox"
                  className="form-check-input"
                />
                <label className="text-muted fs-7 ms-2">Laptop (3)</label>
              </div>
              <div className="d-flex py-1">
                <input
                  onClick={(e: any) =>
                    e.target.checked
                      ? sendDataToParent("Keyboard")
                      : sendDataToParent("")
                  }
                  type="checkbox"
                  className="form-check-input"
                />
                <label className="text-muted fs-7 ms-2">Keyboard (5)</label>
              </div>
              <div className="d-flex py-1">
                <input
                  onClick={(e: any) =>
                    e.target.checked
                      ? sendDataToParent("Mouse")
                      : sendDataToParent("")
                  }
                  type="checkbox"
                  className="form-check-input"
                />
                <label className="text-muted fs-7 ms-2">Mouse (11)</label>
              </div>
              <div className="d-flex py-1">
                <input
                  onClick={(e: any) =>
                    e.target.checked
                      ? sendDataToParent("Display")
                      : sendDataToParent("")
                  }
                  type="checkbox"
                  className="form-check-input"
                />
                <label className="text-muted fs-7 ms-2">Display (35)</label>
              </div>
            </form>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default HardwareFilter;
