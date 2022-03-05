import { DirectoryPath } from "./DirectoryPath";
import { DirectoryContent } from "./DirectroryContent";

export function DirectoryScreen() {
  return (
    <div
      style={{
        backgroundColor: `rgb(40,44,52)`,
        color: "white",
        width: "100%",
        height: "100%",
      }}
    >
      <DirectoryPath />
      <DirectoryContent />
    </div>
  );
}
