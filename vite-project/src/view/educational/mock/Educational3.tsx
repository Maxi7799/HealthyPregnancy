import { eduType } from "./edutype";
import img from "../../../assets/pregnant3.jpg";

export const edu_3: eduType = {
  name: "Emotional",
  imgUrl: img,
  chapter: [
    {
      name: "Understanding Emotional Changes and Mood Swings",
      text: "During pregnancy, it is common for women to experience a range of emotions, from joy and excitement to anxiety and fear. Hormonal changes, particularly fluctuations in estrogen and progesterone, can contribute to mood swings and emotional sensitivity. Additionally, physical discomforts, such as nausea, fatigue, and body aches, can affect mood. It is important for pregnant women to recognize that these emotional changes are normal and to communicate their feelings with supportive people, such as partners, friends, or healthcare providers. Understanding that these emotions are a natural part of the pregnancy journey can help women feel more at ease.",
    },
    {
      name: "Coping Strategies for Stress and Anxiety",
      text: "Stress and anxiety are common during pregnancy, especially for first-time mothers or those with high-risk pregnancies. Developing effective coping strategies is crucial for maintaining emotional well-being. Techniques such as deep breathing exercises, prenatal yoga, and mindfulness meditation can help reduce stress levels and promote relaxation. Engaging in light physical activity, such as walking, can also improve mood and reduce anxiety. It is beneficial to establish a strong support network, including friends, family, or prenatal support groups, to share experiences and receive encouragement. Additionally, maintaining a healthy routine with proper nutrition, adequate sleep, and regular exercise can contribute to a positive emotional state.",
    },
    {
      name: "Seeking Professional Help When Needed",
      text: "While some emotional changes are expected during pregnancy, it is important to recognize when additional support may be needed. If a pregnant woman experiences persistent feelings of sadness, hopelessness, overwhelming anxiety, or thoughts of self-harm, it may indicate a condition such as prenatal depression or anxiety disorder. Seeking help from a healthcare professional, such as a therapist or counselor specializing in maternal mental health, can provide valuable support and treatment options. Early intervention and treatment can improve outcomes for both the mother and the baby, ensuring a healthier and more positive pregnancy experience.",
    },
  ],
  question: {
    title:
      "Which of the following statements is TRUE about managing emotional and mental health during pregnancy?",
    select: {
      A: "Engaging in prenatal yoga and mindfulness meditation can help reduce stress and promote relaxation during pregnancy.",
      B: "Emotional changes and mood swings during pregnancy are uncommon and usually indicate a serious mental health issue",
      C: "It is not necessary to seek professional help for persistent sadness or anxiety during pregnancy, as these feelings are normal and will pass.",
      D: "Stress and anxiety during pregnancy have no impact on the physical health of the mother or the baby.",
    },
    answer: "A",
  },
};
