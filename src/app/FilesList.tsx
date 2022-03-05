import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import { Files, FilesProps } from "../lib/getDirectories";

export function FilesList(props: FilesProps) {
  const files = props.files;
  return (
    <>
      {files.map((file: Files, index) => {
        let trimmedName;
        if (file.name.length > 8) {
          trimmedName = file.name.substring(0, 8) + "...";
        } else {
          trimmedName = file.name;
        }
        if (file.name.endsWith(".jpg")) {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "50px",
                alignItems: "center",
                margin: "0 30px 20px 30px",
              }}
              key={index}
            >
              {" "}
              <ImageOutlinedIcon sx={{ fontSize: 40 }} />
              {file.name}
            </div>
          );
        }
        if (file.name.endsWith(".txt")) {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "50px",
                alignItems: "center",
                margin: "0 30px 20px 30px",
              }}
              key={index}
            >
              {" "}
              <InsertDriveFileOutlinedIcon sx={{ fontSize: 40 }} />
              {file.name}
            </div>
          );
        }
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50px",
              alignItems: "center",
              margin: "0 30px 20px 30px",
            }}
            key={index}
          >
            {" "}
            <InsertDriveFileOutlinedIcon sx={{ fontSize: 40 }} />
            {trimmedName}
          </div>
        );
      })}
    </>
  );
}
