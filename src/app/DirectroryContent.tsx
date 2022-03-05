import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getDirById, RootDir } from "../lib/getDirectories";
import { DirectoryList } from "./DirectoryList";
import { FilesList } from "./FilesList";

export function DirectoryContent() {
  const [directory, setDir] = useState<RootDir[]>([]);
  const [files, setFiles] = useState<RootDir[]>([]);
  const [loaded, setLoaded] = useState<Boolean>();

  let params = useParams<{ id: string }>();
  useEffect(() => {
    (async () => {
      const result = await getDirById(params.id);
      const dirResult = result.data.directories;
      const filesResult = result.data.files;
      setDir(dirResult);
      setFiles(filesResult);
      setLoaded(true);
    })();
  }, [params.id]);
  if (!loaded) {
    return <>wait</>;
  }
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <DirectoryList directories={directory} />
        <FilesList files={files} />
      </div>
    </div>
  );
}
