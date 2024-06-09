import React from "react";

function Tag(props) {
  const { text, color,size='sm' } = props;

  const sizes = {
    xs:{textSize:'0.6rem',padding:'3px 6px'},
    sm:{textSize:'0.8rem',padding:'5px 10px'},
    md:{textSize:'1rem',padding:'8px'},
    lg:{textSize:'1.25rem',padding:'10px'},
    xl:{textSize:'1.35rem',padding:'12px'},
  }

  return (
    <div style={{
      fontSize:sizes[size]['textSize'],
      backgroundColor:color,
      padding:sizes[size]['padding'],
    }} className="rounded glass text-center font-semibold text-white">
      {text}
    </div>
  );
}

export default Tag;
