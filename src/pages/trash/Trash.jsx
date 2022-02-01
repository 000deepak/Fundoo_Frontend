import React, { useState } from 'react';
import Displaynote from '../../components/displaynote/Displaynote';
import service from '../../services/notesService';

export default function Trash() {
  const [binArr, setbinArr] = useState([]);

  React.useEffect(() => {
    getbin();
  }, []);

  const getbin = () => {
    service
      .getdeleted()
      .then((res) => {
        console.log(res, 'in get binArr');
        setbinArr(res.data.data);
        console.log(binArr);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      hi binArr
      <Displaynote binArr={binArr} />
    </div>
  );
}