import { useState } from "react";
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css' // If using WebPack and style-loader.
import { IMAGES } from "../configs/images";

export function InputTag(props) {

  const [tags, setTags] = useState([]);
  const { onTags } = props;

  return (
    <TagsInput
      id={'tags'}
      value={tags}
      onChange={(newTags) => {
        setTags(newTags);
        onTags(newTags);
      }}
      addOnPaste
      onlyUnique
      inputProps={{
        maxLength: 20,
        placeholder: '',
      }}
      placeholder="Search over 400 000 products..."
      className='tags-input'
      renderTag={defaultRenderTag}
    />
  );
}

function defaultRenderTag(props) {
  let { tag, key, disabled, onRemove, classNameRemove, getTagDisplayValue, ...other } = props
  return (
    <span key={key} {...other}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <div style={{ borderLeft: '1px solid #31333b', paddingLeft: 4 }}>{getTagDisplayValue(tag)}</div>
        {!disabled &&
          <div className={classNameRemove} onClick={(e) => onRemove(key)} style={{ marginTop: 6, marginLeft: 10, marginRight: 10 }}>
            <img src={IMAGES.IconCloseMap} alt={'icon'} />
          </div>
        }
      </div>
    </span>
  )
}
