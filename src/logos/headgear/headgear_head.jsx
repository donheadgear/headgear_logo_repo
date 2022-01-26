import React from "react";
import "./headgear_head.css";

class HeadgearHead extends React.Component {
  state = {
    headColor: "#f7931e",
  };

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: Date.now() }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const brainLineColor = () => {
      if (!this.props.shouldAnimate) return "on";
      return Math.random() < 0.5 ? "off" : "on";
    };

    return (
      <svg
        width={this.props.headWidth || "220"}
        height={this.props.headHeight || "257"}
        viewBox="0 0 220 257"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="headgear_logo">
          <path
            id="head"
            d="M218.122 56.9746C215.922 58.8746 213.922 60.6746 211.722 62.5746C211.422 62.0746 211.022 61.6746 210.722 61.0746C205.922 52.2746 199.922 44.3746 192.622 37.5746C186.222 31.5746 179.122 26.4746 171.222 22.3746C161.122 17.0746 150.422 13.8746 139.122 12.2746C133.522 11.4746 127.922 11.5746 122.322 11.7746C116.822 11.9746 111.422 12.7746 105.922 13.9746C97.3225 15.8746 89.1225 19.0746 81.4225 23.2746C73.1225 27.7746 65.7225 33.5746 59.1225 40.3746C53.8225 45.7746 49.3225 51.7746 45.4225 58.2746C40.3225 66.8746 36.7225 76.0746 34.5225 85.8746C32.9225 93.0746 32.2225 100.475 32.3225 107.875C32.4225 114.575 33.1225 121.175 34.6225 127.775C36.6225 136.575 39.8225 144.875 44.2225 152.675C47.3225 158.375 51.1225 163.575 55.3225 168.475C59.5225 173.375 64.2225 177.775 69.3225 181.775C74.8225 186.075 80.8225 189.675 87.2225 192.675C88.5225 193.275 89.5225 194.075 90.2225 195.375C93.6225 201.175 95.6225 207.575 97.0225 214.075C98.0225 218.775 98.8225 223.575 99.5225 228.275C100.122 232.075 100.422 235.875 100.722 239.575C101.222 244.975 101.622 250.375 102.122 255.775C102.122 256.175 102.022 256.475 102.022 256.975C97.7225 256.975 93.6225 256.975 89.1225 256.975C88.8225 254.575 88.5225 252.175 88.2225 249.875C87.1225 242.075 85.6225 234.375 82.9225 226.975C81.7225 223.575 80.2225 220.375 77.9225 217.475C75.5225 214.375 72.6225 212.375 68.4225 212.575C64.8225 212.675 61.3225 212.075 57.7225 212.275C53.1225 212.575 48.5225 213.375 43.8225 213.875C40.5225 214.175 37.2225 214.575 33.8225 214.575C26.3225 214.575 22.3225 209.875 21.4225 202.975C20.6225 197.175 21.1225 191.475 21.8225 185.775C21.9225 185.275 21.8225 184.675 21.8225 184.075C15.0225 182.475 13.4225 178.475 17.4225 173.775C15.2225 173.075 13.3225 172.275 13.0225 169.475C12.7225 167.075 14.0225 165.375 15.1225 163.675C14.5225 162.175 13.4225 161.875 12.3225 161.475C10.7225 160.875 9.02248 160.475 7.42248 160.075C7.22248 159.975 6.92247 159.975 6.72247 159.975C1.52247 158.275 -1.67752 155.075 0.92248 148.575C2.12248 145.475 3.92248 142.575 5.42248 139.675C9.22248 132.575 12.1225 125.175 13.7225 117.275C14.2225 114.875 14.3225 112.375 14.5225 109.875C14.9225 104.875 15.3225 99.7746 15.7225 94.7746C16.5225 85.9746 18.7225 77.4746 21.6225 69.1746C24.1225 61.8746 27.5225 54.9746 31.6225 48.4746C36.1225 41.3746 41.3225 34.9746 47.4225 29.2746C55.3225 21.7746 64.2225 15.7746 74.0225 11.0746C80.3225 8.07461 86.7225 5.67462 93.4225 3.87462C104.522 0.874617 115.822 -0.325386 127.322 0.0746138C134.922 0.274614 142.522 1.27461 149.922 2.97461C161.722 5.77461 172.822 10.2746 183.022 16.8746C192.222 22.7746 200.122 29.9746 206.822 38.5746C210.522 43.3746 213.822 48.4746 216.522 53.8746C217.222 54.8746 217.622 55.8746 218.122 56.9746Z"
            fill={this.state.headColor}
          />
          <g id="brain_lines">
            <path
              className={brainLineColor()}
              id="Vector"
              d="M142.722 67.4746C142.822 60.2746 142.822 53.0746 142.722 45.9746C142.722 43.4746 143.322 41.4746 145.222 39.8746C146.122 39.1746 146.822 38.2746 147.622 37.4746C148.522 36.6746 149.122 35.7746 149.422 34.4746C149.822 32.4746 151.522 31.3746 153.522 31.5746C155.322 31.7746 156.722 33.1746 156.822 34.9746C157.022 36.8746 155.822 38.6746 153.822 38.9746C152.322 39.1746 151.322 39.9746 150.322 40.9746C146.422 45.0746 147.022 43.3746 146.922 49.0746C146.922 54.8746 146.922 60.6746 146.922 66.3746C146.922 67.8746 147.322 68.9746 148.522 70.0746C150.822 72.2746 153.022 74.5746 155.322 76.7746C156.722 78.0746 157.322 79.6746 157.322 81.5746C157.322 93.0746 157.322 104.575 157.322 116.075C157.322 119.175 157.322 122.275 157.322 125.375C157.322 129.275 157.322 129.275 161.122 129.275C169.022 129.275 176.922 129.275 184.722 129.275C192.922 129.275 201.122 129.275 209.322 129.275C210.322 129.275 211.222 129.175 212.122 128.475C213.722 127.175 215.722 127.475 217.122 128.975C218.522 130.475 218.522 132.475 217.222 133.975C215.922 135.475 213.922 135.875 212.322 134.575C211.322 133.875 210.322 133.675 209.122 133.675C192.622 133.675 176.222 133.675 159.722 133.675C159.122 133.675 158.522 133.675 158.022 133.575C154.822 133.075 152.922 130.775 152.822 127.075C152.822 124.375 152.822 121.575 152.822 118.875C152.822 106.975 152.822 94.9746 152.922 83.0746C152.922 81.1746 152.422 79.8746 151.022 78.5746C148.922 76.6746 146.922 74.5746 144.922 72.5746C143.422 71.1746 142.722 69.4746 142.722 67.4746Z"
              fill="white"
            />
            <path
              className={brainLineColor()}
              id="Vector_2"
              d="M173.022 37.2746C174.622 37.0746 175.922 37.7746 176.722 39.1746C177.522 40.5746 177.522 42.0746 176.522 43.2746C175.622 44.2746 175.522 45.1746 175.522 46.3746C175.522 52.8746 175.522 59.4746 175.522 65.9746C175.522 66.7746 175.522 67.4746 175.522 68.2746C175.422 70.1746 174.822 71.8746 173.322 73.1746C171.322 75.0746 169.422 77.1746 167.322 79.0746C166.622 79.7746 166.222 80.5746 166.322 81.5746C166.322 86.3746 166.322 91.2746 166.322 96.0746C166.322 97.1746 166.622 97.9746 167.422 98.7746C170.422 101.675 173.422 104.675 176.322 107.675C177.022 108.375 177.722 108.575 178.722 108.575C183.822 108.575 189.022 108.575 194.122 108.575C199.122 108.575 204.022 108.575 209.022 108.575C210.022 108.575 210.922 108.475 211.822 107.775C213.322 106.575 215.522 106.775 216.822 108.175C218.022 109.475 218.122 111.675 217.022 113.075C215.822 114.675 213.622 115.075 211.922 113.875C210.922 113.175 210.022 112.975 208.922 112.975C199.022 112.975 189.122 112.975 179.222 112.975C176.622 112.975 174.622 112.275 172.722 110.375C169.622 107.075 166.422 103.975 163.122 100.775C162.222 99.8746 161.822 99.0746 161.822 97.7746C161.922 91.7746 161.822 85.8746 161.822 79.8746C161.822 78.6746 162.122 77.8746 163.022 77.0746C165.322 74.8746 167.622 72.4746 169.922 70.2746C170.722 69.4746 171.022 68.6746 171.022 67.5746C171.022 60.1746 171.022 52.8746 171.022 45.4746C171.022 44.4746 170.622 43.6746 170.122 42.8746C168.822 40.3746 170.322 37.4746 173.022 37.2746Z"
              fill="white"
            />
            <path
              className={brainLineColor()}
              id="Vector_3"
              d="M152.022 200.575C152.022 183.075 152.022 165.475 152.022 147.975C152.022 145.675 152.722 143.775 154.422 142.175C155.622 141.075 156.722 139.975 157.822 138.775C159.222 137.375 160.822 136.675 162.722 136.675C171.822 136.675 180.922 136.675 189.922 136.675C193.122 136.675 196.422 136.675 199.622 136.675C200.622 136.675 201.422 136.475 202.222 135.875C204.022 134.575 205.922 134.875 207.322 136.475C208.622 137.975 208.522 140.075 207.222 141.475C205.922 142.875 203.722 143.075 202.022 141.775C201.322 141.175 200.622 141.075 199.722 141.075C187.622 141.075 175.422 141.075 163.322 141.075C162.122 141.075 161.122 141.375 160.322 142.375C159.022 143.775 157.222 144.975 156.522 146.575C155.822 148.175 156.322 150.175 156.322 152.075C156.322 159.975 156.322 167.775 156.322 175.675C156.322 184.675 156.322 193.675 156.322 202.775C156.322 203.975 156.422 204.975 157.222 205.975C158.422 207.475 158.022 209.275 156.722 210.675C155.322 212.075 153.422 212.175 151.822 211.075C150.422 210.075 149.622 207.975 150.622 206.575C152.122 204.675 152.022 202.675 152.022 200.575Z"
              fill="white"
            />
            <path
              className={brainLineColor()}
              id="Vector_4"
              d="M130.922 136.775C130.122 135.975 129.322 135.575 128.222 135.575C123.922 135.575 119.622 135.575 115.222 135.575C114.222 135.575 113.522 135.875 112.822 136.475C111.522 137.475 110.122 137.575 108.722 136.775C107.422 136.075 106.722 134.875 106.822 133.375C106.922 130.475 110.122 128.675 112.422 130.375C113.722 131.275 115.022 131.475 116.522 131.475C120.622 131.475 124.822 131.475 128.922 131.475C131.022 131.475 132.522 132.175 134.022 133.675C137.222 136.975 140.522 140.275 143.822 143.475C145.422 145.075 146.122 146.875 146.122 149.075C146.122 158.075 146.122 166.975 146.122 175.975C146.122 184.875 146.122 193.775 146.122 202.675C146.122 203.975 146.222 205.075 147.022 206.175C148.422 208.175 147.622 210.575 145.422 211.575C143.422 212.475 141.122 211.575 140.322 209.375C139.822 208.175 140.022 206.975 140.822 205.975C141.522 205.175 141.622 204.275 141.622 203.375C141.622 185.375 141.622 167.475 141.622 149.475C141.622 148.275 141.322 147.375 140.422 146.475C137.322 143.175 134.122 139.975 130.922 136.775Z"
              fill="white"
            />
            <path
              className={brainLineColor()}
              id="Vector_5"
              d="M69.2225 90.8746C67.9225 89.5746 67.3225 88.0746 67.3225 86.2746C67.3225 79.2746 67.3225 72.2746 67.3225 65.2746C67.3225 61.8746 69.1225 59.6746 72.4225 59.2746C74.9225 58.9746 77.5225 59.0746 80.0225 59.0746C83.6225 58.9746 82.6225 59.4746 85.1225 56.9746C90.4225 51.7746 95.6225 46.4746 100.922 41.1746C101.722 40.3746 102.322 39.5746 102.322 38.2746C102.322 36.3746 103.922 34.9746 105.822 34.8746C107.722 34.7746 109.322 35.9746 109.722 37.8746C110.122 39.5746 109.222 41.6746 107.422 42.1746C105.722 42.5746 104.722 43.6746 103.622 44.7746C98.1225 50.2746 92.6225 55.6746 87.2225 61.2746C85.7225 62.8746 84.0225 63.5746 81.8225 63.4746C79.2225 63.3746 76.6225 63.4746 74.0225 63.4746C72.2225 63.4746 71.8225 63.8746 71.8225 65.7746C71.8225 69.1746 71.8225 72.4746 71.8225 75.8746C71.8225 79.0746 71.9225 82.2746 71.8225 85.3746C71.8225 86.7746 72.2225 87.7746 73.2225 88.6746C75.5225 90.8746 77.7225 93.1746 80.0225 95.3746C81.5225 96.8746 82.2225 98.5746 82.1225 100.675C82.1225 101.375 82.1225 102.075 82.1225 102.775C82.1225 104.075 82.1225 105.175 83.1225 106.275C84.3225 107.775 83.9225 109.875 82.5225 111.075C81.2225 112.275 78.9225 112.275 77.6225 111.175C76.2225 110.075 75.7225 107.875 76.8225 106.375C77.7225 105.175 77.7225 103.975 77.8225 102.675C78.0225 100.275 77.4225 98.4746 75.5225 96.8746C73.2225 95.0746 71.3225 92.8746 69.2225 90.8746Z"
              fill="white"
            />
            <path
              className={brainLineColor()}
              id="Vector_6"
              d="M87.7225 122.775C89.1225 121.975 90.6225 121.975 91.8225 122.975C92.6225 123.575 93.4225 123.875 94.4225 123.875C105.922 123.875 117.422 123.875 128.922 123.875C130.322 123.875 131.322 123.475 132.322 122.475C135.022 119.675 137.722 116.975 140.522 114.275C141.422 113.375 141.722 112.475 141.722 111.275C141.722 103.875 141.722 96.5746 141.722 89.1746C141.722 88.2746 141.522 87.4746 140.922 86.7746C139.622 85.0746 139.822 82.9746 141.422 81.6746C142.822 80.4746 145.022 80.4746 146.322 81.5746C147.822 82.8746 148.222 84.9746 146.922 86.6746C146.322 87.4746 146.122 88.3746 146.122 89.2746C146.122 96.1746 146.122 102.975 146.122 109.875C146.122 110.575 146.122 111.275 146.122 111.975C146.122 113.975 145.422 115.675 144.022 117.075C141.022 120.075 138.022 123.075 135.022 126.075C133.522 127.575 131.822 128.275 129.722 128.275C123.822 128.275 117.922 128.275 112.022 128.275C106.422 128.275 100.822 128.275 95.2225 128.275C93.8225 128.275 92.7225 128.475 91.5225 129.275C89.7225 130.475 87.4225 129.775 86.4225 127.975C85.3225 126.075 85.9225 123.775 87.7225 122.775Z"
              fill="white"
            />
            <path
              className={brainLineColor()}
              id="Vector_7"
              d="M113.622 30.4746C114.422 29.2746 116.122 28.6746 117.522 28.9746C119.022 29.2746 120.222 30.5746 120.422 32.1746C120.622 33.2746 120.322 34.1746 119.622 34.9746C119.122 35.5746 118.922 36.2746 118.922 37.0746C118.922 38.5746 118.922 40.0746 118.922 41.6746C118.922 43.7746 118.222 45.5746 116.722 47.0746C110.922 52.7746 105.122 58.6746 99.3225 64.3746C98.2225 65.4746 97.7225 66.5746 97.7225 68.1746C97.8225 79.9746 97.7225 91.6746 97.7225 103.475C97.7225 104.475 97.9225 105.275 98.6225 106.075C99.6225 107.275 99.6225 108.675 98.9225 109.975C98.2225 111.375 97.1225 112.075 95.7225 111.975C92.6225 111.975 90.8225 108.975 92.4225 106.475C93.2225 105.275 93.4225 104.075 93.4225 102.775C93.4225 91.1746 93.4225 79.6746 93.4225 68.0746C93.4225 65.4746 94.2225 63.4746 96.0225 61.6746C101.722 56.0746 107.322 50.3746 113.022 44.7746C114.222 43.5746 114.822 42.3746 114.722 40.7746C114.622 39.9746 114.722 39.0746 114.722 38.2746C114.822 36.9746 114.622 35.8746 113.722 34.7746C112.622 33.5746 112.822 31.6746 113.622 30.4746Z"
              fill="white"
            />
            <path
              className={brainLineColor()}
              id="Vector_8"
              d="M124.422 31.7746C125.422 30.5746 126.722 30.0746 128.122 30.4746C129.722 30.8746 130.722 31.9746 131.022 33.6746C131.222 34.8746 130.822 35.9746 130.022 36.7746C129.222 37.4746 129.022 38.3746 129.022 39.3746C129.122 42.9746 129.122 46.5746 129.222 50.1746C129.222 52.0746 128.622 53.5746 127.222 54.9746C122.022 60.0746 117.022 65.2746 111.822 70.2746C110.522 71.5746 109.922 72.8746 109.922 74.7746C110.022 84.0746 110.022 93.4746 109.922 102.775C109.922 103.975 110.122 104.975 111.022 105.875C112.222 107.075 112.322 108.575 111.622 110.075C110.922 111.475 109.722 112.075 108.222 112.075C105.922 112.275 103.522 109.575 104.822 106.875C105.522 105.375 105.722 103.875 105.722 102.275C105.722 92.5746 105.722 82.9746 105.722 73.2746C105.722 71.0746 106.522 69.3746 108.022 67.8746C113.022 62.9746 117.922 57.9746 122.922 53.0746C124.322 51.7746 125.022 50.3746 124.922 48.3746C124.722 45.2746 124.822 42.1746 124.922 39.0746C124.922 37.9746 124.722 36.9746 124.122 35.9746C123.222 34.6746 123.422 33.0746 124.422 31.7746Z"
              fill="white"
            />
            <path
              className={brainLineColor()}
              id="Vector_9"
              d="M135.522 30.3746C137.522 29.4746 139.922 30.4746 140.622 32.5746C141.022 33.7746 140.922 34.8746 140.122 35.7746C139.222 36.7746 139.222 37.9746 139.222 39.1746C139.222 51.5746 139.222 63.9746 139.222 76.2746C139.222 78.6746 138.522 80.4746 136.822 82.1746C132.122 86.7746 127.522 91.3746 122.922 95.9746C122.122 96.7746 121.422 97.5746 121.122 98.7746C120.622 100.575 119.222 101.575 117.422 101.475C115.822 101.475 114.422 100.375 113.922 98.7746C113.222 96.4746 114.822 94.0746 117.322 93.9746C118.522 93.8746 119.322 93.3746 120.122 92.6746C124.522 88.1746 129.022 83.7746 133.422 79.3746C134.322 78.4746 134.722 77.4746 134.722 76.1746C134.622 69.8746 134.722 63.5746 134.722 57.2746C134.722 51.3746 134.722 45.4746 134.722 39.5746C134.722 38.0746 134.622 36.7746 133.722 35.4746C132.522 33.7746 133.522 31.3746 135.522 30.3746Z"
              fill="white"
            />
            <path
              className={brainLineColor()}
              id="Vector_10"
              d="M205.422 74.3746C207.622 73.7746 210.022 75.3746 210.122 77.7746C210.222 79.0746 210.722 79.8746 211.622 80.6746C213.222 82.1746 214.722 83.6746 216.222 85.1746C217.222 86.1746 217.922 87.3746 217.922 88.8746C217.922 92.3746 218.022 95.8746 217.922 99.2746C217.822 101.975 215.422 104.175 212.622 104.275C208.022 104.275 203.322 104.275 198.722 104.275C194.322 104.275 189.822 104.275 185.422 104.275C184.222 104.275 183.222 104.475 182.222 105.175C180.622 106.375 178.522 105.975 177.222 104.575C176.022 103.175 176.022 101.075 177.122 99.6746C178.322 98.1746 180.422 97.7746 182.022 98.9746C182.922 99.5746 183.822 99.7746 184.822 99.7746C193.622 99.7746 202.422 99.7746 211.322 99.7746C213.322 99.7746 213.622 99.4746 213.622 97.4746C213.622 95.2746 213.622 93.0746 213.622 90.7746C213.722 89.3746 213.322 88.3746 212.222 87.3746C210.722 85.9746 209.222 84.4746 207.722 82.9746C207.022 82.2746 206.322 81.7746 205.322 81.5746C203.422 81.1746 202.422 79.6746 202.422 77.8746C202.622 76.2746 203.722 74.8746 205.422 74.3746Z"
              fill="white"
            />
            <path
              className={brainLineColor()}
              id="Vector_11"
              d="M63.4225 56.7746C64.9225 58.0746 65.1225 60.1746 63.8225 61.8746C63.3225 62.5746 63.0225 63.2746 63.0225 64.1746C63.0225 77.1746 63.0225 90.1746 63.0225 103.175C63.0225 104.175 63.3225 104.875 64.0225 105.575C65.1225 106.575 66.2225 107.675 67.2225 108.775C68.0225 109.575 68.8225 110.275 69.9225 110.675C71.5225 111.275 72.3225 112.675 72.2225 114.475C72.1225 116.075 71.3225 117.175 69.7225 117.775C67.4225 118.575 64.8225 117.075 64.8225 114.575C64.8225 113.175 64.3225 112.175 63.3225 111.275C62.4225 110.475 61.7225 109.575 60.9225 108.875C59.1225 107.275 58.5225 105.275 58.5225 102.975C58.5225 96.6746 58.5225 90.2746 58.5225 83.9746C58.5225 77.4746 58.5225 70.9746 58.5225 64.5746C58.5225 63.5746 58.4225 62.7746 57.7225 61.9746C56.4225 60.2746 56.8225 58.0746 58.3225 56.8746C59.8225 55.5746 62.0225 55.5746 63.4225 56.7746Z"
              fill="white"
            />
            <path
              className={brainLineColor()}
              id="Vector_12"
              d="M87.3225 114.375C88.1225 114.975 88.8225 115.175 89.8225 115.175C100.222 115.175 110.522 115.175 120.922 115.175C121.922 115.175 122.622 114.875 123.322 114.175C125.522 111.875 127.822 109.675 130.022 107.475C130.622 106.875 130.922 106.275 131.022 105.375C131.222 103.475 132.522 102.275 134.422 102.075C136.422 101.875 137.922 102.975 138.422 104.875C139.022 106.775 137.722 109.075 135.722 109.375C134.322 109.575 133.322 110.275 132.322 111.275C130.222 113.375 128.122 115.475 126.022 117.575C124.622 118.975 123.022 119.675 121.122 119.575C116.022 119.575 110.822 119.575 105.722 119.575C100.422 119.575 95.2225 119.575 89.9225 119.575C89.0225 119.575 88.2225 119.775 87.5225 120.375C85.9225 121.675 83.8225 121.475 82.5225 120.075C81.2225 118.675 81.1225 116.375 82.3225 114.975C83.5225 113.375 85.6225 113.075 87.3225 114.375Z"
              fill="white"
            />
            <path
              className={brainLineColor()}
              id="Vector_13"
              d="M218.422 124.075C217.722 124.675 216.822 124.875 216.022 125.275C215.122 124.975 214.422 124.875 213.922 124.475C213.022 123.875 212.022 123.775 211.022 123.775C199.122 123.775 187.322 123.775 175.422 123.775C173.022 123.775 171.122 123.175 169.522 121.275C168.222 119.775 166.722 118.375 165.222 116.975C164.322 116.075 163.422 115.375 162.022 115.175C160.522 114.975 159.422 113.875 159.122 112.275C158.822 110.775 159.322 109.475 160.522 108.575C161.722 107.575 163.022 107.475 164.422 108.075C165.622 108.575 166.422 109.575 166.522 110.875C166.522 112.075 167.122 112.775 167.922 113.475C169.522 115.075 171.122 116.575 172.622 118.175C173.522 119.175 174.522 119.575 175.822 119.475C183.022 119.475 190.122 119.475 197.322 119.475C201.622 119.475 205.922 119.475 210.322 119.475C211.622 119.475 212.722 119.275 213.722 118.275C215.122 116.875 217.622 117.175 218.822 118.675C220.222 120.675 219.822 122.775 218.422 124.075Z"
              fill="white"
            />
            <path
              className={brainLineColor()}
              id="Vector_14"
              d="M181.822 46.8746C183.122 45.4746 185.122 45.2746 186.722 46.3746C188.222 47.3746 188.922 49.6746 187.822 51.2746C186.922 52.5746 186.822 53.7746 186.922 55.1746C187.022 56.7746 186.722 58.4746 186.722 60.0746C186.722 63.4746 186.922 66.7746 186.922 70.1746C186.922 71.7746 186.822 73.3746 186.722 74.8746C186.722 75.4746 186.722 75.9746 186.822 76.5746C187.122 78.9746 186.522 80.9746 184.822 82.6746C182.722 84.7746 180.622 86.8746 178.522 88.9746C177.822 89.6746 177.322 90.3746 177.222 91.3746C177.022 93.2746 175.422 94.4746 173.422 94.3746C171.622 94.3746 170.222 93.1746 169.922 91.4746C169.522 89.3746 170.422 87.4746 172.322 87.1746C174.322 86.8746 175.422 85.6746 176.722 84.3746C178.322 82.7746 179.822 81.1746 181.422 79.6746C182.222 78.8746 182.522 78.0746 182.522 76.9746C182.522 73.1746 182.522 69.3746 182.522 65.5746C182.522 61.9746 182.522 58.4746 182.522 54.8746C182.522 53.6746 182.422 52.5746 181.522 51.5746C180.322 50.2746 180.622 48.0746 181.822 46.8746Z"
              fill="white"
            />
            <path
              className={brainLineColor()}
              id="Vector_15"
              d="M168.122 170.875C167.622 171.475 167.023 171.975 166.523 172.475C165.623 173.375 164.822 174.175 164.722 175.675C164.522 177.475 162.522 178.775 160.822 178.675C159.022 178.575 157.422 176.975 157.322 175.275C157.122 173.375 158.422 171.475 160.322 171.275C162.922 170.875 164.022 168.775 165.422 167.075C165.722 166.675 165.722 165.875 165.722 165.275C165.722 160.875 165.722 156.375 165.722 151.975C165.722 150.675 165.922 149.475 166.722 148.375C167.822 146.975 169.222 146.075 171.122 146.075C173.522 146.075 175.822 146.075 178.222 146.075C179.622 146.075 180.822 145.975 181.922 145.075C183.222 144.075 185.323 144.375 186.523 145.475C187.723 146.575 188.022 148.475 187.222 149.975C186.222 151.875 183.622 152.675 181.822 151.275C180.722 150.475 179.723 150.275 178.523 150.275C176.723 150.275 174.823 150.275 173.023 150.275C170.423 150.275 170.023 150.675 170.023 153.175C170.023 155.475 170.023 157.775 170.023 160.075C170.023 162.275 170.023 164.475 170.023 166.775C169.923 168.275 169.322 169.675 168.122 170.875Z"
              fill="white"
            />
            <path
              className={brainLineColor()}
              id="Vector_16"
              d="M202.422 88.8746C203.222 89.6746 203.922 90.2746 205.122 90.3746C206.822 90.5746 207.822 91.7746 208.222 93.3746C208.522 94.7746 208.022 95.9746 206.922 96.9746C204.722 98.8746 201.222 97.6746 200.822 94.7746C200.622 93.6746 200.222 92.8746 199.522 92.1746C197.922 90.5746 196.322 88.8746 194.622 87.3746C193.322 86.0746 192.722 84.6746 192.722 82.7746C192.722 76.9746 192.722 71.2746 192.722 65.4746C192.722 64.1746 192.622 62.8746 191.622 61.7746C190.522 60.4746 190.722 58.6746 191.822 57.3746C192.922 56.0746 194.522 55.5746 196.122 56.1746C197.622 56.7746 198.522 58.0746 198.722 59.7746C198.422 60.5746 198.122 61.4746 197.622 62.1746C197.122 62.8746 196.922 63.5746 196.922 64.4746C196.922 70.1746 196.922 75.8746 196.922 81.5746C196.922 82.8746 197.322 83.8746 198.322 84.7746C199.722 86.0746 201.022 87.4746 202.422 88.8746Z"
              fill="white"
            />
            <path
              className={brainLineColor()}
              id="Vector_17"
              d="M99.0225 133.675C100.922 133.675 102.422 134.775 102.722 136.775C102.822 137.675 103.122 138.275 103.822 138.875C105.922 140.875 107.922 142.975 110.022 145.075C110.722 145.775 111.422 146.075 112.422 145.975C115.822 145.975 119.222 145.975 122.722 145.975C123.622 145.975 124.222 145.575 124.922 145.075C127.522 143.475 130.522 144.875 130.822 147.975C130.922 149.475 130.322 150.675 129.022 151.475C127.722 152.275 126.222 152.275 125.122 151.375C124.022 150.475 123.022 150.475 121.822 150.475C118.622 150.475 115.322 150.475 112.122 150.475C110.122 150.475 108.522 149.775 107.222 148.375C105.422 146.575 103.622 144.775 101.822 142.975C100.822 141.975 99.8225 141.175 98.3225 140.875C96.4225 140.575 95.3225 138.775 95.5225 136.975C95.6225 134.875 97.0225 133.675 99.0225 133.675Z"
              fill="white"
            />
            <path
              className={brainLineColor()}
              id="Vector_18"
              d="M90.4225 42.8746C88.9225 44.3746 87.4225 45.7746 86.0225 47.3746C84.7225 48.7746 83.1225 49.3746 81.2225 49.3746C80.6225 49.3746 79.9225 49.4746 79.3225 49.3746C76.7225 48.7746 75.3225 50.3746 73.9225 52.0746C73.5225 52.4746 73.4225 53.1746 73.3225 53.7746C72.5225 56.4746 69.3225 57.4746 67.2225 55.6746C66.1225 54.6746 65.5225 53.4746 65.9225 51.9746C66.3225 50.3746 67.4225 49.1746 69.1225 49.0746C70.4225 48.9746 71.3225 48.4746 72.0225 47.5746C73.7225 45.4746 75.9225 44.7746 78.5225 44.8746C83.1225 44.9746 81.6225 45.4746 84.9225 42.2746C85.6225 41.5746 86.2225 40.8746 86.9225 40.2746C87.8225 39.3746 88.5225 38.4746 88.7225 37.0746C88.9225 35.1746 90.9225 33.9746 92.8225 34.2746C94.6225 34.4746 96.2225 36.2746 96.1225 38.1746C96.1225 39.9746 94.6225 41.6746 92.6225 41.8746C91.7225 41.8746 91.1225 42.2746 90.4225 42.8746Z"
              fill="white"
            />
            <path
              className={brainLineColor()}
              id="Vector_19"
              d="M48.2225 70.9746C49.1225 69.6746 50.3225 69.1746 51.8225 69.2746C53.7225 69.4746 55.1225 71.0746 55.3225 73.0746C55.0225 73.7746 54.8225 74.6746 54.3225 75.2746C53.7225 76.0746 53.5225 76.9746 53.5225 77.8746C53.5225 83.3746 53.5225 88.8746 53.5225 94.4746C53.5225 95.6746 53.7225 96.6746 54.4225 97.6746C55.4225 98.9746 55.3225 100.575 54.4225 101.975C53.6225 103.275 51.9225 103.875 50.4225 103.475C49.0225 103.075 47.6225 101.775 47.6225 100.275C47.6225 99.3746 47.9225 98.3746 48.3225 97.5746C48.8225 96.8746 49.0225 96.1746 49.0225 95.2746C49.0225 89.2746 49.0225 83.3746 49.0225 77.3746C49.0225 76.3746 48.6225 75.6746 48.1225 74.9746C47.3225 73.6746 47.3225 72.2746 48.2225 70.9746Z"
              fill="white"
            />
            <path
              className={brainLineColor()}
              id="Vector_20"
              d="M202.822 145.875C204.022 145.975 205.122 145.775 206.122 144.875C207.422 143.775 209.722 144.075 210.822 145.275C212.122 146.575 212.322 148.575 211.222 150.175C210.122 151.775 207.622 152.375 206.022 151.075C204.922 150.275 203.922 150.075 202.622 150.075C201.022 150.075 199.322 150.175 197.722 150.075C196.722 150.075 195.922 150.375 195.222 151.075C193.222 153.075 191.222 154.975 189.222 156.975C188.622 157.575 188.222 158.275 188.122 159.075C187.722 161.175 186.222 162.275 184.222 162.175C182.422 162.075 180.922 160.775 180.722 159.075C180.522 156.875 181.422 155.275 183.622 154.875C185.022 154.575 186.022 153.875 186.922 152.975C188.722 151.175 190.722 149.375 192.522 147.575C193.722 146.375 195.122 145.775 196.822 145.875C197.922 145.875 199.022 145.875 200.022 145.875C201.122 145.875 202.022 145.875 202.822 145.875Z"
              fill="white"
            />
            <path
              className={brainLineColor()}
              id="Vector_21"
              d="M163.522 72.1746C162.122 73.3746 160.122 73.4746 158.622 72.2746C157.222 71.1746 156.622 69.0746 157.722 67.6746C158.722 66.2746 158.822 64.7746 158.822 63.1746C158.822 60.4746 158.722 57.8746 158.822 55.1746C158.822 53.9746 158.522 53.0746 157.722 52.2746C156.622 51.1746 155.522 50.0746 153.822 49.8746C151.922 49.5746 150.922 47.7746 151.122 45.8746C151.322 44.1746 152.722 42.7746 154.322 42.6746C156.322 42.4746 158.222 43.5746 158.422 45.4746C158.622 47.0746 159.522 48.1746 160.622 49.0746C162.522 50.6746 163.222 52.7746 163.222 55.1746C163.222 56.7746 163.222 58.3746 163.222 59.9746C163.222 61.1746 163.222 62.3746 163.222 63.5746C163.222 64.9746 163.122 66.3746 164.222 67.6746C165.422 68.8746 164.922 70.9746 163.522 72.1746Z"
              fill="white"
            />
            <path
              className={brainLineColor()}
              id="Vector_22"
              d="M86.9225 85.1746C88.0225 86.6746 87.6225 88.6746 86.1225 89.9746C84.7225 91.1746 82.8225 91.2746 81.4225 90.1746C79.9225 88.9746 79.3225 86.9746 80.4225 85.4746C81.4225 84.0746 81.5225 82.5746 81.5225 80.9746C81.5225 79.3746 81.4225 77.7746 81.5225 76.1746C81.5225 75.0746 81.3225 74.1746 80.6225 73.1746C79.6225 71.9746 79.6225 70.5746 80.4225 69.2746C81.1225 68.0746 82.2225 67.3746 83.5225 67.3746C85.1225 67.3746 86.2225 67.9746 86.9225 69.2746C87.7225 70.5746 87.7225 71.9746 86.8225 73.1746C86.1225 74.0746 85.9225 75.0746 85.9225 76.1746C85.9225 77.9746 85.9225 79.7746 85.9225 81.4746C85.9225 82.7746 86.0225 83.9746 86.9225 85.1746Z"
              fill="white"
            />
            <path
              className={brainLineColor()}
              id="Vector_23"
              d="M131.722 69.6746C131.522 71.1746 130.722 72.3746 129.222 72.6746C127.622 72.9746 126.722 73.9746 125.622 74.9746C124.622 75.9746 123.622 77.0746 122.522 78.0746C121.422 79.0746 120.622 80.1746 120.222 81.6746C119.622 84.0746 117.022 84.9746 114.922 83.8746C113.722 83.1746 113.022 82.0746 113.022 80.5746C113.022 78.5746 114.322 77.0746 116.322 76.8746C117.322 76.7746 117.922 76.3746 118.622 75.7746C120.022 74.2746 121.422 72.8746 122.922 71.4746C123.722 70.7746 124.122 69.9746 124.222 68.8746C124.522 65.9746 127.722 64.4746 130.122 66.0746C131.322 66.8746 131.922 68.1746 131.722 69.6746Z"
              fill="white"
            />
          </g>
        </g>
      </svg>
    );
  }
}

export default HeadgearHead;
