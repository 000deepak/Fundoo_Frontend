import React, { useState } from 'react';
import Displaynote from '../../components/displaynote/Displaynote';
import service from '../../services/notesService';

/**
 * Purpose
 * 1.get archived notes from Db
 * 2.store in archive
 * 3.pass array to display
*  */ 

export default function Archive() {

  const [archive, setArchive] = useState([]);

  React.useEffect(() => {
    getArchives();
  }, []);

  const getArchives = () => {
    service
      .getarchived()
      .then((res) => {
        console.log('get archive response is', res);
        
        let filtered= res.data.data.filter(note=>note.isArchived==true &&  note.isDeleted==false);
        setArchive(filtered);
        console.log('in archve res', res.data.data);
        console.log('in archve array', archive);
        console.log('in archve fltered', filtered);

      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Displaynote noteArr={archive}  getnote={getArchives} />
    </div>
  );
}
