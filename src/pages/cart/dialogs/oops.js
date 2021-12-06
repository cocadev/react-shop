import { Dialog } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export function DialogOops(props) {

  const { open, onClose, onContinue } = props;

  return (
    <Dialog
      onClose={onClose}
      open={open}
      className='dialog'
    >
      <div style={{ width: 320 }}
        className='dialog-box-small'>

        <div className='mt20 full center'>
          <div className='grey-box'>
            <HighlightOffIcon className='red text20' />
          </div>
          <div className='text20 red mt20'>Oops.</div>
        </div>

        <div className='text24 text-center mt20 lineH14'>
          Sorry, but you must be over 21 years old to continue.
        </div>

        <div className='full mt30'>
          <div className="text16 border-grey border-radius-base center ph15 cursor" onClick={onContinue}>OK</div>
        </div>

      </div>
    </Dialog>
  );
}

