import axios from "axios";

export type RootDir = {
  name: string;
  id: string;
  files?: FilesProps;
  directories?: DirProps;
};

export type PropId = {
   id: string;
 };

export type Files = {
  name: string;
};

export type FilesProps = {
  files: Array<Files>;
};

export type Directories = {
  name: string;
  id: string;
};

export type DirProps = {
  directories: Array<Directories>;
};

export const getDirById = async (id: string | undefined) => {
  return await axios.get<RootDir[] | any>(
    "https://fnp5vd20r2.execute-api.us-east-1.amazonaws.com/dev/directories/" +
      id
  );
};
