import * as React from "react";
import { IChannel } from "@shlack/types";
import Channel from "./Channel";
import { useParams } from "react-router-dom";

const SelectedChannel: React.FunctionComponent<{
  channels: IChannel[];
}> = ({ channels }) => {
  const { channelId } = useParams();

  if (!channelId) return <p>Invalid channelId</p>;
  const selectedChannel = channels.find((c: IChannel) => c.id === channelId);
  if (!selectedChannel)
    return (
      <div>
        <p>Could not find channel with id {channelId}</p>
        <pre>{JSON.stringify(channels, null, "  ")}</pre>
      </div>
    );

  return <Channel channel={selectedChannel} />;
};

export default SelectedChannel;
