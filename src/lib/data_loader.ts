import dataJson from '../assets/data.json';

export class NotificationData {
  name!: string;
  content!: string;
  profilePicSrc!: string;
  timeSince!: string;
  link?: string;
  additionalContent?: string;
  additionalImgSrc?: string;
  isNew?: boolean;
}

export default function loadData(): Array<NotificationData> {
  return dataJson.map(data => {
    const profilePicSrc = new URL(data.profile_pic, import.meta.url).href;
    const additionalImgSrc = data.additional_img
      ? new URL(data.additional_img, import.meta.url).href
      : undefined;

    const notifData = new NotificationData();
    notifData.name = data.name;
    notifData.content = data.content;
    notifData.profilePicSrc = profilePicSrc;
    notifData.timeSince = data.time_since;
    notifData.link = data.link;
    notifData.additionalContent = data.additional_content;
    notifData.additionalImgSrc = additionalImgSrc;
    notifData.isNew = data.is_new ? data.is_new : false;
    return notifData;
  });
}
