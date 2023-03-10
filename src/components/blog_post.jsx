import React from "react";
import FontSizeChanger from "react-font-size-changer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./blog_post";
import "./components.css";
import { useEffect, useState } from "react";
import {GiSpeaker} from 'react-icons/gi'

function Blog_post() {
  const [ourText, setOurText] = useState("");
  const msg = new SpeechSynthesisUtterance();
  msg.rate = 0.8

  const speechHandler = (msg) => {
    msg.text = ourText;
    window.speechSynthesis.speak(msg);
  };

  return (
    <div>
      <FontSizeChanger
        targets={["#target .content"]}
        onChange={(element, newValue, oldValue) => {
          console.log(element, newValue, oldValue);
        }}
        options={{
          stepSize: 2,
          range: 3,
        }}
        customButtons={{
          up: <span style={{ fontSize: "20px" }}>A+</span>,
          down: <span style={{ fontSize: "20px" }}>A-</span>,
          style: {
            backgroundColor: "#0d6efd",

            color: "white",
            WebkitBoxSizing: "border-box",
            WebkitBorderRadius: "5px",
            width: "60px",
          },
          buttonsMargin: 10,
        }}
      /><br />
      <button className="btn btn-primary" onClick={() => {
          setOurText(document.getElementById('blog-content').innerText)
          speechHandler(msg)
          }}>
          <GiSpeaker />
        </button>
      <div id="target">
        <h1 className="title">How to find happiness in everything you do?</h1>
        <h2 className="content" align="justify" value="msg" id="blog-content">
          Happiness is a state of mind that most people strive for in their
          lives. It is a feeling of contentment and fulfillment that comes from
          within and is not dependent on external circumstances. While some
          people seem to have a natural tendency towards happiness, others may
          struggle to find it in their daily lives. However, with a change in
          mindset and perspective, it is possible to find happiness in
          everything you do. The first step towards finding happiness in
          everything you do is to focus on the present moment and practice
          gratitude. Our minds have a tendency to dwell on the past or worry
          about the future, causing us to miss out on the joys and blessings in
          our lives. By focusing on the present moment and being thankful for
          what you have, you can cultivate a positive outlook and appreciation
          for your life. This can help you see the good in every situation and
          find happiness in the small things. Setting achievable and meaningful
          goals is another way to find happiness in everything you do. Having a
          sense of purpose and direction gives you a reason to get up in the
          morning and makes you feel like you're making progress in life. When
          you set goals that align with your values and interests, you'll find
          that you're more motivated to work towards them and will experience a
          greater sense of satisfaction when you achieve them. Self-care is also
          crucial for finding happiness in everything you do. Taking care of
          your physical, emotional, and mental well-being can help you feel more
          energized, refreshed, and positive. Engaging in activities that bring
          you joy and relaxation, such as exercise, reading, or spending time
          with loved ones, can help you recharge and reduce stress. Cultivating
          positive relationships is another key to finding happiness in
          everything you do. Spending time with people who support and encourage
          you can help boost your self-esteem, reduce stress, and bring a sense
          of happiness and fulfillment. Whether it's spending time with family,
          friends, or a romantic partner, it's important to nurture
          relationships that bring you joy and positivity. Pursuing your
          passions and interests is also an important aspect of finding
          happiness in everything you do. Engaging in hobbies and activities
          that you enjoy can bring a sense of meaning and fulfillment to your
          life. Whether it's painting, writing, or playing a musical instrument,
          finding a creative outlet that you're passionate about can help you
          escape the stress of daily life and bring happiness into your life.
          Finally, helping others is a powerful way to find happiness in
          everything you do. Whether it's volunteering, donating to charity, or
          simply being there for a friend in need, making a positive impact on
          someone else's life can bring a sense of happiness and fulfillment
          that is difficult to find anywhere else. By reaching out and helping
          others, you can enrich your own life and find joy in making a
          difference. In conclusion, finding happiness in everything you do is a
          journey that requires effort and patience. By focusing on the present
          moment, setting meaningful goals, practicing self-care, cultivating
          positive relationships, pursuing your passions and interests, and
          helping others, you can cultivate a positive mindset and find joy and
          fulfillment in your daily life. Remember, happiness is not something
          you find, it's something you create, and it starts with you.
        </h2>
      </div>
      <div>
        {/* <h1>React Text to Speech App</h1> */}
        {/* <input
          type="text"
          value={ourText}
          placeholder="Enter Text"
          onChange={(e) => setOurText(e.target.value)}
        /> */}
        
      </div>
    </div>
  );
}

export default Blog_post;
