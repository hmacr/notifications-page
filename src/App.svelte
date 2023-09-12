<script lang="ts">
  import loadData, { NotificationData } from "./lib/data_loader";

  import NotificationHeader from "./components/NotificationHeader.svelte";
  import NotificationItem from "./components/NotificationItem.svelte";

  const allNotifData: Array<NotificationData> = loadData();

  const totalNewNotif: number = allNotifData.filter(notifData => notifData.isNew).length;

</script>

<!-- Container -->
<div class="max-w-screen-xl mx-auto flex justify-center font-plus-jakarta-sans">
  <!-- NotificationBar -->
  <div class="w-[450px] md:w-[900px] flex flex-col gap-3 bg-white py-6 px-4 md:px-6 md:mt-10">
    <NotificationHeader {totalNewNotif} />
    {#each allNotifData as notifData}
      <NotificationItem
        name={notifData.name}
        content={notifData.content}
        profilePic={notifData.profilePicSrc}
        link={notifData.link}
        timeSince={notifData.timeSince}
        additionalContent={notifData.additionalContent}
        additionalImg={notifData.additionalImgSrc}
        isNew={notifData.isNew}
      />
    {/each}
  </div>
</div>