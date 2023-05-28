import {upload} from "./schedule";

const credentials = { email: 'nightowldevelopers@gmail.com', pass: 'Zxcvbnm#123', recoveryemail: 'Your Recovery Email' }

const getFormattedDate=(nextDays)=>{
    const today = new Date();
    today.setDate(today.getDate() + nextDays);

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    return formatter.format(today);
}

const onVideoUploadSuccess = (videoUrl:string) => {
    console.log("video_uploaded"+ videoUrl);
}

const videoObject = {
    path: "/Users/nnishad/Downloads/testvideo.mp4",
    title: "Test upload",
    description: "Test upload",
    publishType:"SCHEDULE" as "SCHEDULE" | "PRIVATE" | "UNLISTED" | "PUBLIC",
    // thumbnail: "thumbnails/"+req.body["id"]+".jpg",
    channelName: "Mansi Palav Vlogs",
    language: 'english',
    onSuccess: onVideoUploadSuccess,
    skipProcessingWait: true,
    onProgress: (progress) => {
        console.log('progress', progress)
    },
    scheduleDate: getFormattedDate(5),
    // playlist: "HairStyle Transformation",
    uploadAsDraft: false, isAgeRestriction: false, isNotForKid: true
}
upload (credentials, [videoObject], {headless: false}).then(
    result => {
        console.log(Date.now(), result)
    })
    .catch(e => console.log("Error while uploading video +", Date.now(), e))