import { Card } from "react-bootstrap";
import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";

const BrandFilter = ({ onData }: { onData: any }) => {
  const [show, setShow] = useState(true);

  const sendDataToParent = (data: any) => {
    onData(data);
  };

  return (
    <div className="mb-3">
      <Card className="p-2 rounded-4">
        <Card.Body>
          <span className="d-flex w-100">
            <h5 className="theme-font w-75 m-0">Brand</h5>
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
                      ? sendDataToParent("Apple")
                      : sendDataToParent("")
                  }
                  type="checkbox"
                  className="form-check-input"
                />
                <label className="text-muted fs-7 ms-2">Apple</label>
              </div>
              <div className="d-flex py-1">
                <input
                  onClick={(e: any) =>
                    e.target.checked
                      ? sendDataToParent("Apc")
                      : sendDataToParent("")
                  }
                  type="checkbox"
                  className="form-check-input"
                />
                <label className="text-muted fs-7 ms-2">APC</label>
              </div>
              <div className="d-flex py-1">
                <input
                  onClick={(e: any) =>
                    e.target.checked
                      ? sendDataToParent("Acer")
                      : sendDataToParent("")
                  }
                  type="checkbox"
                  className="form-check-input"
                />
                <label className="text-muted fs-7 ms-2">Acer</label>
              </div>
              <div className="d-flex py-1">
                <input
                  onClick={(e: any) =>
                    e.target.checked
                      ? sendDataToParent("Asus")
                      : sendDataToParent("")
                  }
                  type="checkbox"
                  className="form-check-input"
                />
                <label className="text-muted fs-7 ms-2">Asus</label>
              </div>
              <div className="d-flex py-1">
                <input
                  onClick={(e: any) =>
                    e.target.checked
                      ? sendDataToParent("Belkin")
                      : sendDataToParent("")
                  }
                  type="checkbox"
                  className="form-check-input"
                />
                <label className="text-muted fs-7 ms-2">Belkin</label>
              </div>
              <div className="d-flex py-1">
                <input
                  onClick={(e: any) =>
                    e.target.checked
                      ? sendDataToParent("BenQ")
                      : sendDataToParent("")
                  }
                  type="checkbox"
                  className="form-check-input"
                />
                <label className="text-muted fs-7 ms-2">BenQ</label>
              </div>
              <div className="d-flex py-1">
                <input
                  onClick={(e: any) =>
                    e.target.checked
                      ? sendDataToParent("Dell")
                      : sendDataToParent("")
                  }
                  type="checkbox"
                  className="form-check-input"
                />
                <label className="text-muted fs-7 ms-2">Dell</label>
              </div>
              <div className="d-flex py-1">
                <input
                  onClick={(e: any) =>
                    e.target.checked
                      ? sendDataToParent("HP")
                      : sendDataToParent("")
                  }
                  type="checkbox"
                  className="form-check-input"
                />
                <label className="text-muted fs-7 ms-2">HP</label>
              </div>
              <div className="d-flex py-1">
                <input
                  onClick={(e: any) =>
                    e.target.checked
                      ? sendDataToParent("Jabra")
                      : sendDataToParent("")
                  }
                  type="checkbox"
                  className="form-check-input"
                />
                <label className="text-muted fs-7 ms-2">Jabra</label>
              </div>
            </form>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default BrandFilter;
