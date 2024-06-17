# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## InFo App

Viết một ứng dụng bằng React sử dụng Typescript gồm 2 tab như sau:

- Active tab tương ứng khi người dùng chọn

Tab thông tin:

- Các trường: Tên chiến dịch, Mô tả (bắt buộc nhập trường Tên chiến dịch)

Tab Chiến dịch con:

- Bao gồm một danh sách các chiến dịch con

- Mặc định active Chiến dịch con 1 được tạo sẵn

- Nút Add (+):

- Để thêm mới một Chiến dịch con vào danh sách

- Chiến dịch con mới mặc định chứa 1 quảng cáo

- Một Chiến dịch con bao gồm:

- Thông tin chiến dịch con: Tên chiến dịch con, Trạng thái hoạt động (Bắt buộc nhập trường Tên chiến dịch con)

- Danh sách các quảng cáo của chiến dịch con

- Một quảng cáo bao gồm:

- Thông tin quảng cáo: Tên quảng cáo, Số lượng (Bắt buộc nhập cả 2 trường, trường Số lượng phải lớn hơn 0)

- Nút Thêm (+):

- Để thêm mới một quảng cáo vào danh sách

- Danh sách quảng cáo của một chiến dịch con phải lớn hơn 0

- Số lượng của chiến dịch con (số hiển thị ở dưới tên chiến dịch con trong demo) bằng tổng số lượng của tất cả các quảng cáo

Validation có 2 trường hợp:

Trường hợp 1: Khi chưa click nút submit

Không hiển thị cảnh báo lỗi

Trường hợp 2: Đã click vào nút submit

Hiện cảnh báo lỗi cho tất cả các trường bắt buộc ở cả 2 Tab.

Hiện cảnh báo lỗi cho tất cả các chiến dịch con (Chuyển tên chiến dịch con bị lỗi thành màu đỏ).

submit

- Toàn bộ thông tin trong hai tab hợp lệ (không có cảnh báo): Thành công

- Ngược lại: Vui lòng điền đúng và đầy đủ thông tin và thực hiện validation với các trường bắt buộc nhập
