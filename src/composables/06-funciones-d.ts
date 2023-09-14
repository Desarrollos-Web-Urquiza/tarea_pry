(() => {
  // Aplicar el PRY
  // Priorizando la composición frente a la herencia.

  type Gender = "M" | "F";

  interface PersonProps{
    birthdate: Date;
    gender: Gender;
    name: string;
  };

  const createPerson = ({ name, gender, birthdate }: PersonProps) => ({
    name,
    gender,
    birthdate,
  });

  type UserProps = {
    email: string;
    role: string;
  };

  const createUser = ({ email, role }: UserProps) => ({
    email,
    lastAccess: new Date(),
    role,
    checkCredentials: () => true,
  });

  type SettingsProps = {
    lastOpenFolder: string;
    workingDirectory: string;
    lastPagesVisited: string[];
  };

  const createSettings = ({lastOpenFolder,workingDirectory,lastPagesVisited,}: SettingsProps) => ({
    lastOpenFolder,
    workingDirectory,
    lastPagesVisited,
  });

  interface UserSettingsProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastOpenFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
    lastPagesVisited: string[];
  };

  const createUserSettings = ({
    name,
    gender,
    birthdate,
    email,
    role,
    lastOpenFolder,
    workingDirectory,
    lastPagesVisited,
  }: UserSettingsProps) => ({
    person: createPerson({ name, gender, birthdate }),
    user: createUser({ email, role }),
    settings: createSettings({lastOpenFolder,workingDirectory,lastPagesVisited,}),
  });

  const userSettings = createUserSettings({
    birthdate: new Date("1985-10-21"),
    email: "fernando@google.com",
    gender: "M",
    lastOpenFolder: "/home",
    name: "Fernando",
    role: "Admin",
    workingDirectory: "/usr/home",
    lastPagesVisited: ["/home", "/about"],
  });

  console.log({ userSettings });
})();
