import * as React from "react";
import type { ITeam } from "@shlack/types";
import Team from "./Team";
import { useParams } from "react-router";

const SelectedTeam: React.FunctionComponent<{
  teams: ITeam[];
}> = ({ teams }) => {
  const { teamId } = useParams();

  if (!teamId) throw new Error(`undefined teamId`);

  const selectedTeam = teams.find((t: ITeam) => t.id === teamId);
  if (!selectedTeam)
    throw new Error(`Invalid could not find team with id ${teamId}`);

  return <Team team={selectedTeam} />;
};

export default SelectedTeam;
