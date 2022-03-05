import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import { useLocation, useNavigate } from "react-router-dom";

import { Directories, DirProps } from "../lib/getDirectories";

export function DirectoryList(dirList: DirProps) {
  const location = useLocation();
  const dir = dirList.directories;
  let navigate = useNavigate();
  const redirect = (redirectId: string) => {
    navigate(`${location.pathname}/${redirectId}`);
  };
  return (
    <>
      {dir.map((directory: Directories) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50px",
              alignItems: "center",
              margin: "0 30px 20px 30px",
            }}
            key={directory.id}
            onClick={() => redirect(directory.id)}
          >
            {" "}
            <FolderOutlinedIcon sx={{ fontSize: 40 }} />
            {directory.name}
          </div>
        );
      })}
    </>
  );
}
