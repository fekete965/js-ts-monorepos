import * as React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { getAllTeams } from "@shlack/data";
import { ITeam } from "@shlack/types";
import { useAsyncDataEffect } from "@shlack/utils";
import Loading from "./components/Loading";
import SelectedTeam from "./components/SelectedTeam";
import TeamSelector from "./components/TeamSelector";

const createRouter = (teams: ITeam[]) => {
  return createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/">
          <section className="m-12 text-xl">
            <h3>Please select a team</h3>
          </section>
        </Route>
        <Route path="/team">
          <section className="m-12 text-xl">
            <h3>Please select a team</h3>
          </section>
        </Route>
        <Route path="/team/:teamId">
          <SelectedTeam teams={teams} />
        </Route>
      </>
    )
  );
};

const App: React.FunctionComponent = () => {
  const [teams, setTeams] = React.useState<ITeam[]>();

  useAsyncDataEffect(() => getAllTeams(), {
    setter: setTeams,
    stateName: "teams",
  });

  if (!teams) return <Loading message="Loading teams" />;

  const router = createRouter(teams);

  return (
    <div className="flex flex-col sm:flex-row w-full h-full">
      <TeamSelector teams={teams} />
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
