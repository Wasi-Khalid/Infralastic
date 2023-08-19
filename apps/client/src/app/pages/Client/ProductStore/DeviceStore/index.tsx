import React from "react";
import {useGlobalSelector} from "@infralastic/global-state";

const DeviceStore = () => {
  const { userInfo } = useGlobalSelector((state) => state.user);

  // Generate the iframe URL with the user_id parameter
  const iframeUrl = `https://infralastic-shop.infralastic.com/device-store?user_id=${userInfo?.result?.user_id}`;

  return (
    <div className="h-100 py-3">
\      <iframe src={iframeUrl} className="w-100 h-100" />
    </div>
  );
};

export default DeviceStore;
