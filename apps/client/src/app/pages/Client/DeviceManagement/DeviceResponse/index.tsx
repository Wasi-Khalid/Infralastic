import { useEffect, useState } from "react";
import {executeSaltCommands, executeSaltCommandsPowerShell} from "@infralastic/global-state";
import {useNavigate, useSearchParams} from "react-router-dom";
import './device-response.scss';
import {BiArrowBack} from "react-icons/bi";

const TerminalView = ({ terminalData }: {terminalData: any}) => {
  return (
    <div className="bg-dark text-white">
      {terminalData.map((line: any, index: any) => (
        <pre key={index} className="terminal-line p-2">

          {line}
        </pre>
      ))}
    </div>
  );
};

const DeviceResponse = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const minionId: any = searchParams.get("id");
  const query: any = searchParams.get("command");
  const [terminalData, setTerminalData] = useState([]);
  const router = useNavigate();

  function executeCommand() {
    const formData: any = {
      minionId: minionId,
      command: query,
    };
    if (query === 'Get-PhysicalDisk') {
      executePowerShell()
    } else {
      executeSaltCommands(formData).then((res: any) => {
        const responseData = res?.data?.data || "";
        const lines = responseData?.split("\n").filter((line: any) => line.trim() !== "");
        setTerminalData(lines);
      });
    }
  }

  function executePowerShell() {
    const formData: any = {
      minionId: minionId,
      command: query,
    };
    executeSaltCommandsPowerShell(formData).then((res: any) => {
      const responseData = res?.data?.data || "";
      const lines = responseData?.split("\n").filter((line: any) => line.trim() !== "");
      setTerminalData(lines);
    });
  }

  useEffect(() => {
    executeCommand();
  }, []);

  return (
    <div>
      <br/>
      <br/>
      <div className='position-absolute'>
        <button
          className='border-0 bg-secondary text-white rounded-circle d-flex align-items-center p-2'
          onClick={() => router(-1)}
        ><BiArrowBack /></button>
      </div>
      <h3 className='theme-font text-center text-uppercase my-3'>Response for {query}</h3>
      <TerminalView terminalData={terminalData} />
    </div>
  );
};

export default DeviceResponse;
