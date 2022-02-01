import React, { useState } from 'react';
import Displaynote from '../../components/displaynote/Displaynote';
import service from '../../services/notesService';

export default function Archive() {
  const [archive, setArchive] = useState([]);

  React.useEffect(() => {
    getArchives();
  }, []);


  const getArchives = () => {
    service
      .getarchived()
      .then((res) => {
        console.log('get archive response is', res, res.data.data);
        setArchive(res.data.data);
        console.log('in archve array', archive);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      hi archive in archive component
      <Displaynote archive={archive}  />
    </div>
  );
}
