import './agent-modal.scss';
import {Button, Col, Modal, ProgressBar, Row} from "react-bootstrap";
import {StepLabel, Stepper, Typography, Step} from "@mui/material";
import React, {useState} from "react";
import {getInstaller} from "@infralastic/global-state";
import { saveAs } from "file-saver";
import {Loader} from "@infralastic/loader";

interface AgentModal {
  show: any;
  hide: any;
}
const AgentModal = (props: AgentModal) => {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [installer, setInstaller] = useState<any>('');
  const [visible, setVisible] = useState<any>(false);

  const steps = [
    {
      label: 'Select OS'
    },
    {
      label: 'Download'
    }
  ];

  const handleInstaller = () => {
    const config: any = {};
    getInstaller(config).then((res: any) => {
      const installerUrl = res.data.data.windows;
      const xhr = new XMLHttpRequest();

      xhr.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentage = Math.round((event.loaded / event.total) * 100);
          console.log(percentage)
          setVisible(true);
          setProgress(percentage)
        }
      };
      xhr.onload = () => {
        console.log('Download Complete');
        setVisible(false)
        saveAs(installerUrl, "agent-installer.msi");
      };
      xhr.onerror = () => {
        console.log('Download Error');
      };
      xhr.open('GET', installerUrl, true);
      xhr.send();
    });
  }
  return(
    <>
      <Modal show={props.show} onHide={props.hide} size='xl'>
        <Modal.Body>
          <div className="p-3">
            <h5 className='theme-font'>Download agent installer</h5>
          </div>
          <Row>
            <Col md={3}>
              <Stepper activeStep={activeStep} orientation="vertical" className='px-3'>
                {steps.map((step, index) => (
                  <Step key={step.label}>
                    <StepLabel
                      optional={
                        index === 2 ? (
                          <Typography variant="caption">Last step</Typography>
                        ) : null
                      }
                    >
                      {step.label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Col>
            <Col md={9}>
              <div className="d-flex h-100">
                <div className="vr h-100"></div>
                {activeStep === 0 ?
                    <div className='px-3'>
                      <h5 className='theme-font theme-danger'>Select an OS</h5>
                      <br/>
                      <div className="d-flex">
                        <div className='mx-3'>
                          <input
                            onClick={() => setInstaller('Window')}
                            type="radio"
                            name="fav_language"
                            className='mx-1'
                          />
                          <label className='theme-font text-muted' >Windows (.msi)</label>
                        </div>
                        <div className='mx-3'>
                          <input
                            onClick={() => setInstaller('Mac')}
                            type="radio"
                            name="fav_language"
                            className='mx-1'
                          />
                          <label className='theme-font text-muted'>Mac (.pkg)</label>
                        </div>
                        <div className='mx-3'>
                          <input
                            onClick={() => setInstaller('Linux')}
                            type="radio"
                            name="fav_language"
                            className='mx-1'
                          />
                          <label className='theme-font text-muted'>Linux (.bash)</label>
                        </div>
                      </div>
                      <hr/>
                      <p className='theme-font text-muted px-3'>Download and install the agent on all devices you wish to monitor</p>
                    </div>
                  : activeStep === 1 ?
                    <div className='px-3'>
                      <h5 className='theme-font theme-danger'>Download</h5>
                      <p className='theme-font'>Download the agent installer</p>
                      <button
                        className='theme-font bg-theme-danger border-0 text-white py-2 px-3 rounded'
                        onClick={() => handleInstaller()}
                      >Download</button>
                      {visible && <div className='my-2'>
                        <ProgressBar now={progress} label={`${progress}%`} />
                      </div>
                      }
                    </div>
                  : <></>
                }
              </div>
            </Col>
          </Row>
          <div className="d-flex justify-content-end">
            {activeStep === 0 &&
            <Button
              variant="danger"
              className='mx-2'
              onClick={() => setActiveStep(1)}
              disabled={installer === ''}
            >
              Next
            </Button>
            }
            {activeStep === 1 &&
            <Button variant="danger" className='mx-2' onClick={props.hide}>
              Done
            </Button>
            }
            <Button variant="secondary" onClick={props.hide}>
              Close
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )

}
export default AgentModal;
