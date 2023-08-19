import './device-cmd.scss';
import {Card} from "react-bootstrap";
import {useState} from "react";
import {AiOutlineEnter} from "react-icons/ai";
import {useSearchParams} from "react-router-dom";
import {executeSaltCommands} from "@infralastic/global-state";
import {toast} from "react-toastify";
const DeviceCmd = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [terminalData, setTerminalData] = useState([]);
  const minionId: any = searchParams.get("id");

  function handleSubmit() {
    const formData = {
      minionId: minionId,
      command: query
    }
    executeSaltCommands(formData).then((res: any) => {
      toast.success(res?.data?.data?.msg)
      const responseData = res?.data?.data || "";
      const lines = responseData?.split("\n").filter((line: any) => line.trim() !== "");
      setTerminalData(lines);
    })
  }
  return(
    <>
      <br/>
      <br/>
      <Card className='border-0 shadow'>
        <Card.Body>
          <h3 className='theme-font my-3 text-center'>Command Prompt</h3>
          <div className="d-flex justify-content-center">
            <div className="d-flex w-50 mb-4">
              <input
                type="text"
                className='form-control'
                placeholder='Enter Commands'
                onChange={(e: any) => setQuery(e.target.value)}
              />
              <button
                className='bg-theme-danger border-0 mx-2 rounded text-white px-2'
                onClick={() => handleSubmit()}
              >
                <AiOutlineEnter />
              </button>
            </div>
          </div>
          <div className="bg-dark text-white p-2 theme-font">
            {terminalData.map((line: any, index: any) => (
              <pre key={index} className="terminal-line p-2">
                {line}
              </pre>
            ))}
          </div>
        </Card.Body>
      </Card>
    </>
  )
}
export default DeviceCmd;
