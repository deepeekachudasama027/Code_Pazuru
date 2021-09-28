const mongoose = require("mongoose");

const quesSchema = new mongoose.Schema({
  level: {
    type: Number,
    required: true,
    trim: true,
  },
  code: [String],
  order: [String],
});

module.exports = Question = mongoose.model("question", quesSchema);
// Question.insertMany([
//   {
//     level: 1,
//     order: [
//       "<html>",
//       "<head>",
//       "<meta charset='UTF-8'>",
//       "<title>Type Ahead 👀</title>",
//       "<link rel='stylesheet' href='style.css'>",
//       "</head>",
//       "<body>",
//       "<form class='search-form'>",
//       "<input type='text' class='search' placeholder='City or State'>",
//       "<li>Filter for a city</li>",
//       "<li>or a state</li>",
//       "</ul>",
//       "</form>",
//       "<script src='./index.js'>",
//       "</script>",
//       "</body>",
//       "</html>",
//     ],
//     code: [
//       "<li>Filter for a city</li>",
//       "<html>",
//       "</ul>",
//       "<form class='search-form'>",
//       "<li>or a state</li>",
//       "<script src='./index.js'>",
//       "<input type='text' class='search' placeholder='City or State'>",
//       "<head>",
//       "</head>",
//       "<title>Type Ahead 👀</title>",
//       "<body>",
//       "<meta charset='UTF-8'>",
//       "</body>",
//       "</script>",
//       "</html>",
//       "</form>",
//       "<link rel='stylesheet' href='style.css'>",
//     ],
//   },
// ]);

// Question.insertMany([
//   {
//     level: 2,
//     order: [
//       "int t(int x, int y)",
//       "{ \n int z = 1;",
//       "while (y > 0) ",
//       "{ \n if (y % 2 == 0)",
//       "{ \n x = x * x;",
//       " y = y / 2; \n }",
//       "else \n {",
//       "z = z * x;",
//       " y = y - 1;    \n } \n }",
//       "return z; \n }",
//     ],
//     code: [
//       "{ \n x = x * x;",
//       " y = y / 2; \n }",
//       "z = z * x;",
//       " y = y - 1;    \n } \n }",
//       "else \n {",
//       "{ \n if (y % 2 == 0)",
//       "return z; \n }",
//       "int t(int x, int y)",
//       "{ \n int z = 1;",
//       "while (y > 0) ",
//     ],
//   },
// ]);

// Question.insertMany([
//   {
//     level: 3,
//     order: [
//       "onMouseMove = (e) => \n {",
//       "e.preventDefault();",
//       "let targetRect = target.getBoundingClientRect();",
//       "let x = e.pageX - targetRect.left + 10;",
//       "if (x > targetRect.width) \n { \n x = targetRect.width \n};",
//       "else  if (x < 0) \n { x = 0 \n};",
//       "btn.x = x - 10; \n btn.style.left = btn.x ; \n let percentPosition = (btn.x + 10) / targetRect.width * 100;",
//       "color.style.width = percentPosition ; \n tooltip.style.left = btn.x - 5 ; \n tooltip.style.opacity = 1; \n tooltip.textContent = Math.round(percentPosition);",
//       " };",
//     ],

//     code: [
//       "btn.x = x - 10; \n btn.style.left = btn.x + 'px'; \n let percentPosition = (btn.x + 10) / targetRect.width * 100;",
//       "if (x > targetRect.width) \n { \n x = targetRect.width \n};",
//       " };",
//       "let targetRect = target.getBoundingClientRect();",
//       "onMouseMove = (e) => \n {",
//       "e.preventDefault();",
//       "color.style.width = percentPosition ; \n tooltip.style.left = btn.x - 5 ; \n tooltip.style.opacity = 1; \n tooltip.textContent = Math.round(percentPosition);",
//       "else  if (x < 0) \n { x = 0 \n};",
//       "let x = e.pageX - targetRect.left + 10;",
//     ],
//   },
// ]);

// Question.insertMany([
//   {
//     level: 11,
//     order: [
//       "try \n {",
//       "const user = await User.findOne({ email }).select('+password');",
//       "if (!user)",
//       "return next(new ErrorResponse('user doesn't exist', 401));",
//       "const isMatch = await user.matchPassword(password);",
//       "if (!isMatch) ",
//       "return next(new ErrorResponse('Invalid credentials', 401));",
//       "sendToken(user, 200, res);",
//       "} \n catch (err) \n {",
//       "next(err); \n }",
//     ],
//     code: [
//       "return next(new ErrorResponse('Invalid credentials', 401));",
//       "} \n catch (err) \n {",
//       "if (!isMatch) ",
//       "next(err); \n }",
//       "sendToken(user, 200, res);",
//       "try \n {",
//       "if (!user)",
//       "const isMatch = await user.matchPassword(password);",
//       "const user = await User.findOne({ email }).select('+password');",
//       "return next(new ErrorResponse('user doesn't exist', 401));",
//     ],
//   },
// ]);

// Question.insertMany([
//   {
//     level: 8,
//     order: [
//       "function exportSaveState() \n {",
//       "var state = { \n };",
//       "if(gameState == 1 || gameState == -1 || (gameState === 0 && localStorage.getItem('saveState') !== undefined)) \n { \n state =",
//       "hex: $.extend(true, {}, MainHex), \n blocks: $.extend(true, [], blocks),\n score: score, \n	wavegen: waveone, \n gdx: gdx, \n	gdy: gdy, \n",
//       "comboTime:settings.comboTime \n	}; \n	state.hex.blocks.map(function(a) \n { \n	for (var i = 0; i < a.length; i++) \n { \n",
//       "a[i] = $.extend(true, {}, a[i]); \n }\n a.map(descaleBlock);\n	});",
//       "for (var i = 0; i < state.blocks.length; i++) \n {",
//       "state.blocks[i] = $.extend(true, {}, state.blocks[i]);",
//       "} \n state.blocks.map(descaleBlock); \n	} \n }",
//     ],

//     code: [
//       "for (var i = 0; i < state.blocks.length; i++) \n {",
//       "a[i] = $.extend(true, {}, a[i]); \n }\n a.map(descaleBlock);\n	});",
//       "} \n state.blocks.map(descaleBlock); \n	} \n }",
//       "hex: $.extend(true, {}, MainHex), \n blocks: $.extend(true, [], blocks),\n score: score, \n	wavegen: waveone, \n gdx: gdx, \n	gdy: gdy, \n",
//       "var state = { \n };",
//       "state.blocks[i] = $.extend(true, {}, state.blocks[i]);",
//       "function exportSaveState() \n {",
//       "comboTime:settings.comboTime \n	}; \n	state.hex.blocks.map(function(a) \n { \n	for (var i = 0; i < a.length; i++) \n { \n",
//       "if(gameState == 1 || gameState == -1 || (gameState === 0 && localStorage.getItem('saveState') !== undefined)) \n { \n state =",
//     ],
//   },
// ]);

// Question.insertMany([
//   {
//     level: 7,
//     order: [
//       "namespace draco \n {",
//       "class KeyframeAnimationEncodingTest : public ::testing::Test \n { \n protected: ",
//       "KeyframeAnimationEncodingTest() \n { \n }",
//       "bool CreateAndAddTimestamps(int32_t num_frames) \n {",
//       "timestamps_.resize(num_frames);",
//       "for (int i = 0; i < timestamps_.size(); ++i)",
//       "timestamps_[i] = static_cast<draco::KeyframeAnimation::TimestampType>(i);",
//       "return keyframe_animation_.SetTimestamps(timestamps_); \n } \n int32_t CreateAndAddAnimationData(int32_t num_frames, \n uint32_t num_components) \n { \n",
//       "animation_data_.resize(num_frames * num_components);",
//       "for (int i = 0; i < animation_data_.size(); ++i)",
//       "animation_data_[i] = static_cast<float>(i);",
//       " return keyframe_animation_.AddKeyframes(draco::DT_FLOAT32, num_components, \n animation_data_); \n }",
//     ],
//     code: [
//       "animation_data_.resize(num_frames * num_components);",
//       "return keyframe_animation_.SetTimestamps(timestamps_); \n } \n int32_t CreateAndAddAnimationData(int32_t num_frames, \n uint32_t num_components) \n { \n",
//       "timestamps_[i] = static_cast<draco::KeyframeAnimation::TimestampType>(i);",
//       "for (int i = 0; i < animation_data_.size(); ++i)",
//       "animation_data_[i] = static_cast<float>(i);",
//       "class KeyframeAnimationEncodingTest : public ::testing::Test \n { \n protected: ",
//       " return keyframe_animation_.AddKeyframes(draco::DT_FLOAT32, num_components, \n animation_data_); \n }",
//       "namespace draco \n {",
//       "bool CreateAndAddTimestamps(int32_t num_frames) \n {",
//       "for (int i = 0; i < timestamps_.size(); ++i)",
//       "KeyframeAnimationEncodingTest() \n { \n }",
//       "timestamps_.resize(num_frames);",
//     ],
//   },
// ]);

// Question.insertMany([
//   {
//     level: 13,
//     order: [
//       "<head>",
//       "<meta charset='UTF-8'>",
//       "<title> BlogIN </title>",
//       "<link rel='icon' href='logo.png' type='image/png' />",
//       "<link rel='stylesheet' href='../css/main.css'>",
//       "</head>",
//       "<body>",
//       "<nav class='navbar'>",
//       "<div class='navbar-brand'>",
//       "<img src='logo.png' alt='' style='width: 120px;height: 120px'> \n </div>",
//       "<div class='navbar-links'>",
//       "<ul>",
//       "<div class='navbar-links'> \n <li><a href='/logout'>Logout</a></li>",
//       "</ul>\n </div>",
//       "</nav>",
//       "<div class='main'>",
//       "<div class='container'>",
//       "<p style='font-size:50px;padding-top:40px;font-weight:bold'>Publish your Passions, your way <br> Let's started   Blogging !</p>",
//       "<p style='font-size:50px;padding-top:40px;font-weight:bold'>Publish your Passions, your way <br> Let's started   Blogging !</p>",
//       "</center>",
//       "</div> \n </div>",
//       "<script src='./index.js'>",
//       "</script>",
//       "</body>",
//     ],
//     code: [
//       "</head>",
//       "</script>",
//       "<body>",
//       "<div class='navbar-brand'>",
//       "<div class='navbar-links'>",
//       "</body>",
//       "<link rel='icon' href='logo.png' type='image/png' />",
//       "</center>",
//       "<nav class='navbar'>",
//       "</ul>\n </div>",
//       "<ul>",
//       "<script src='./index.js'>",
//       "<link rel='stylesheet' href='../css/main.css'>",
//       "<div class='main'>",
//       "<div class='navbar-links'> \n <li><a href='/logout'>Logout</a></li>",
//       "<title> BlogIN </title>",
//       "<div class='container'>",
//       "</nav>",
//       "<img src='logo.png' alt='' style='width: 120px;height: 120px'> \n </div>",
//       "</head>",
//       "<p style='font-size:50px;padding-top:40px;font-weight:bold'>Publish your Passions, your way <br> Let's started   Blogging !</p>",
//       "<p style='font-size:50px;padding-top:40px;font-weight:bold'>Publish your Passions, your way <br> Let's started   Blogging !</p>",
//       "<meta charset='UTF-8'>",
//       "</div> \n </div>",
//       "<nav class='navbar'>",
//     ],
//   },
// ]);

// Question.insertMany([
//   {
//     level: 14,
//     order: [
//       "while(*e != '\0') \n {",
//       "if(isalnum(*e))",
//       "printf('%c',*e); \n else if(*e == '(')",
//       "push(*e);",
//       "else if(*e == ')') \n {",
//       " while((x = pop()) != '(')",
//       "printf('%c', x);}",
//       "else \n {",
//       "while(priority(stack[top]) >= priority(*e))",
//       "printf('%c',pop());",
//       "push(*e); \n }",
//       "e++; \n  }",
//     ],
//     code: [
//       "else \n {",
//       "while(priority(stack[top]) >= priority(*e))",
//       " while((x = pop()) != '(')",
//       "printf('%c',*e); \n else if(*e == '(')",
//       "if(isalnum(*e))",
//       "push(*e);",
//       "printf('%c',pop());",
//       "push(*e); \n }",
//       "e++; \n  }",
//       "while(*e != '\0') \n {",
//       "printf('%c', x);}",
//       "else if(*e == ')') \n {",
//     ],
//   },
// ]);

// Question.insertMany([
//   {
//     level: 16,
//     order: [
//       "var hasDuplicate;",
//       "function sortOrder( a, b ) \n {",
//       "if ( a === b ) \n {",
//       "hasDuplicate = true;",
//       "return 'yes';",
//       "} \n var compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?",
//       "a.compareDocumentPosition( b ) :1;",
//       "if ( compare & 1 ) ",
//       "{ \n if ( a == document || a.ownerDocument == document && jQuery.contains( document, a ))",
//       "return a;",
//       "else if ( b == document || b.ownerDocument == document && jQuery.contains( document, b )) \n{",
//       "return b; \n}",
//       "return 0; \n}",
//     ],
//     code: [
//       "} \n var compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?",
//       "var hasDuplicate;",
//       "if ( a === b ) \n {",
//       "function sortOrder( a, b ) \n {",
//       "if ( compare & 1 ) ",
//       "{ \n if ( a == document || a.ownerDocument == document && jQuery.contains( document, a ))",
//       "a.compareDocumentPosition( b ) :1;",
//       "return 'yes';",
//       "return b; \n}",
//       "else if ( b == document || b.ownerDocument == document && jQuery.contains( document, b )) \n{",
//       "hasDuplicate = true;",
//       "return 0; \n}",
//       "return a;",
//     ],
//   },
// ]);

// Question.insertMany([
//   {
//     level: 15,
//     order: [
//       "#define F(i, j) f[i * max + j]",
//       "void function(int *a, int len) {",
//       " int max = a[0];",
//       "for (int i = 1; i < len; i++)",
//       "if (a[i] > max)",
//       "  max = a[i];",
//       "unsigned char *f = new unsigned char[max * len];\n memset(f, 0, static_cast<size_t>(max) * len);",
//       "for (int i = 0; i < len; i++)",
//       " for (int j = 0; j < a[i]; j++) F(i, j) = 1;",
//       "for (int j = 0; j < max; j++) { \n int sum = 0;",
//       "for (int i = 0; i < len; i++) {",
//       "sum += F(i, j);",
//       "F(i, j) = 0; \n }",
//       "for (int i = len - sum; i < len; i++) F(i, j) = 1; \n }",
//       "for (int i = 0; i < len; i++) {\nint j;",
//       "for (j = 0; j < max && F(i, j); j++);",
//       "a[i] = j;\n}",
//       "delete[] f;\n}",
//     ],
//     code: [
//       "for (int i = 1; i < len; i++)",
//       "for (int i = len - sum; i < len; i++) F(i, j) = 1; \n }",
//       "for (j = 0; j < max && F(i, j); j++);",
//       "F(i, j) = 0; \n }",
//       "if (a[i] > max)",
//       "for (int j = 0; j < max; j++) { \n int sum = 0;",
//       "for (int i = 0; i < len; i++) {",
//       " for (int j = 0; j < a[i]; j++) F(i, j) = 1;",
//       " int max = a[0];",
//       "void function(int *a, int len) {",
//       "  max = a[i];",
//       "a[i] = j;\n}",
//       "#define F(i, j) f[i * max + j]",
//       "for (int i = 0; i < len; i++) {\nint j;",
//       "unsigned char *f = new unsigned char[max * len];\n memset(f, 0, static_cast<size_t>(max) * len);",
//       "sum += F(i, j);",
//       "delete[] f;\n}",
//       "for (int i = 0; i < len; i++)",
//     ],
//   },
// ]);

// Question.insertMany([
//   {
//     level: 10,
//     order: [
//       "double function(double x) {",
//       "double f1 = x;",
//       "for (int i = x - 1; i > 0; i--) {",
//       "  f1 *= i;\n }",
//       "if (f1 <= 0) ",
//       "  f1 = 1;",
//       "}",
//       "return f1;\n}",
//       "double function1(double expected, double x) {",
//       "return (std::pow(expected, x) * std::exp(-expected)) / fact(x);\n}",
//       "double function2(double expected, double lower, double upper) {",
//       " double f2 = 0;",
//       "for (int i = lower; i <= upper; i++) {",
//       "  f2+= function1(expected, i);\n}",
//       "return f2;\n}",
//     ],
//     code: [
//       " double f2 = 0;",
//       "}",
//       "double function2(double expected, double lower, double upper) {",
//       "return f2;\n}",
//       "return (std::pow(expected, x) * std::exp(-expected)) / fact(x);\n}",
//       "double function(double x) {",
//       "if (f1 <= 0) ",
//       "double f1 = x;",
//       "double function1(double expected, double x) {",
//       "  f1 *= i;\n }",
//       "for (int i = lower; i <= upper; i++) {",
//       "  f2+= function1(expected, i);\n}",
//       "for (int i = x - 1; i > 0; i--) {",
//       "  f1 = 1;",
//       "return f1;\n}",
//     ],
//   },
// ]);

// Question.insertMany([
//   {
//     level: 5,
//     order: [
//       "return function (array, cmp) {",
//       "cmp = cmp || compare;",
//       "var gap, current;",
//       "for (var k = 0; k < gaps.length; k += 1) {",
//       "gap = gaps[k]",
//       "for (var i = gap; i < array.length; i += gap) {",
//       "current = array[i];",
//       "for (var j = i;j >= gap && cmp(array[j - gap], current) > 0; j -= gap) {",
//       " array[j] = array[j - gap];\n}",
//       "array[j] = current;\n}",
//       "}",
//       "return array;\n};",
//     ],
//     code: [
//       "var gap, current;",
//       "return function (array, cmp) {",
//       " array[j] = array[j - gap];\n}",
//       "gap = gaps[k]",
//       "current = array[i];",
//       "array[j] = current;\n}",
//       "cmp = cmp || compare;",
//       "for (var i = gap; i < array.length; i += gap) {",
//       "}",
//       "for (var k = 0; k < gaps.length; k += 1) {",
//       "return array;\n};",
//       "for (var j = i;j >= gap && cmp(array[j - gap], current) > 0; j -= gap) {",
//     ],
//   },
// ]);

// Question.insertMany([
//   {
//     level: 9,
//     order: [
//       "export default function f1(originalMatrix) {",
//       "const matrix = originalMatrix.slice();",
//       "for (let rowIndex = 0; rowIndex < matrix.length; rowIndex += 1) {",
//       "for (let columnIndex = rowIndex + 1; columnIndex < matrix.length; columnIndex += 1) {",
//       "[ \n matrix[columnIndex][rowIndex],",
//       "matrix[rowIndex][columnIndex], \n ] = [",
//       "matrix[rowIndex][columnIndex], \n matrix[columnIndex][rowIndex],",
//       "];\n } \n }",
//       "for (let rowIndex = 0; rowIndex < matrix.length; rowIndex += 1) { ",
//       "for (let columnIndex = 0; columnIndex < matrix.length / 2; columnIndex += 1) {",
//       "[ \n matrix[rowIndex][matrix.length - columnIndex - 1],",
//       "matrix[rowIndex][columnIndex], \n ] = [",
//       "matrix[rowIndex][columnIndex], \n matrix[rowIndex][matrix.length - columnIndex - 1], \n ];",
//       " } \n }",
//       "return matrix;",
//       "}",
//     ],
//     code: [
//       "export default function f1(originalMatrix) {",
//       "matrix[rowIndex][columnIndex], \n ] = [",
//       "const matrix = originalMatrix.slice();",
//       "matrix[rowIndex][columnIndex], \n ] = [",
//       "[ \n matrix[columnIndex][rowIndex],",
//       "matrix[rowIndex][columnIndex], \n matrix[rowIndex][matrix.length - columnIndex - 1], \n ];",
//       "for (let columnIndex = rowIndex + 1; columnIndex < matrix.length; columnIndex += 1) {",
//       "[ \n matrix[rowIndex][matrix.length - columnIndex - 1],",
//       "];\n } \n }",
//       "for (let rowIndex = 0; rowIndex < matrix.length; rowIndex += 1) {",
//       "for (let columnIndex = 0; columnIndex < matrix.length / 2; columnIndex += 1) {",
//       "return matrix;",
//       "for (let rowIndex = 0; rowIndex < matrix.length; rowIndex += 1) { ",
//       "matrix[rowIndex][columnIndex], \n matrix[columnIndex][rowIndex],",
//       "}",
//       " } \n }",
//     ],
//   },
// ]);

// Question.insertMany([
//   {
//     level: 12,
//     order: [
//       "void function1(vector<vector<int>> matrix)",
//       "{",
//       "int top = 0, \n left = 0, \n right = matrix[0].size()-1,\n bottom = matrix.size()-1;",
//       "while (top<=bottom && left<=right)",
//       "{ \n for (int i = left; i <= right; i++){",
//       "cout<<matrix[top][i]; \n }",
//       "top++;",
//       "for (int i = top; i <= bottom; i++) \n cout<<matrix[i][right]; ",
//       "right--; \n if(top<=bottom)",
//       "for (int i = right ; i >= left; i--)",
//       "cout<<matrix[bottom][i]; ",
//       "bottom--;",
//       "if(left<=right)",
//       "for (int i = bottom ; i >= top; i--)",
//       "cout<<matrix[i][left];",
//       "left++; \n }",
//       "}",
//       "int main() \n { \n int r, c, temp;",
//       "cin >> r >> c;",
//       "vector<vector<int>> arr(r);",
//       "for (int i = 0; i < r; i++) \n {",
//       "for (int j = 0; j < c; j++) \n {",
//       "cin >> temp; \n arr[i].push_back(temp); \n } \n }",
//       "function1(arr);",
//       "return 0; \n }",
//     ],
//     code: [
//       "int main() \n { \n int r, c, temp;",
//       "bottom--;",
//       "cout<<matrix[bottom][i]; ",
//       "vector<vector<int>> arr(r);",
//       "function1(arr);",
//       "while (top<=bottom && left<=right)",
//       "for (int i = bottom ; i >= top; i--)",
//       "for (int i = top; i <= bottom; i++) \n cout<<matrix[i][right]; ",
//       "for (int i = 0; i < r; i++) \n {",
//       "return 0; \n }",
//       "right--; \n if(top<=bottom)",
//       "void function1(vector<vector<int>> matrix)",
//       "cin >> temp; \n arr[i].push_back(temp); \n } \n }",
//       "left++; \n }",
//       "top++;",
//       "int top = 0, \n left = 0, \n right = matrix[0].size()-1,\n bottom = matrix.size()-1;",
//       "if(left<=right)",
//       "{",
//       "for (int j = 0; j < c; j++) \n {",
//       "cin >> r >> c;",
//       "for (int i = right ; i >= left; i--)",
//       "cout<<matrix[i][left];",
//       "}",
//       "cout<<matrix[top][i]; \n }",
//       "{ \n for (int i = left; i <= right; i++){",
//     ],
//   },
// ]);

// Question.insertMany([
//   {
//     level: 4,
//     order: [
//       "class CodePazuru {",
//       "public:",
//       "bool function1(int N, vector<int> adj[]) {",
//       "queue<int> q; \n vector<int> v(N, 0);",
//       "for(int i = 0;i<N;i++) { \n for(auto it: adj[i]) { ",
//       "v[it]++; \n } \n  }",
//       "for(int i = 0;i<N;i++) {",
//       "if(v[i] == 0) {",
//       "q.push(i); \n } \n } \n int cnt = 0;",
//       "while(!q.empty()) {",
//       "int node = q.front(); ",
//       "q.pop(); \n  cnt++; ",
//       "for(auto it : adj[node]) {",
//       "v[it]--;",
//       "if(v[it] == 0) { ",
//       "q.push(it); \n } \n } \n }",
//       "if(cnt == N) ",
//       "return false; ",
//       "return true; \n }",
//       "};",
//     ],
//     code: [
//       "for(int i = 0;i<N;i++) {",
//       "bool function1(int N, vector<int> adj[]) {",
//       "q.push(i); \n } \n } \n int cnt = 0;",
//       "while(!q.empty()) {",
//       "public:",
//       "class CodePazuru {",
//       "if(cnt == N) ",
//       "q.pop(); \n  cnt++; ",
//       "for(auto it : adj[node]) {",
//       "q.push(it); \n } \n } \n }",
//       "for(int i = 0;i<N;i++) { \n for(auto it: adj[i]) { ",
//       "if(v[i] == 0) {",
//       "return false; ",
//       "queue<int> q; \n vector<int> v(N, 0);",
//       "int node = q.front(); ",
//       "v[it]++; \n } \n  }",
//       "};",
//       "v[it]--;",
//       "return true; \n }",
//       "if(v[it] == 0) { ",
//     ],
//   },
// ]);

// Question.insertMany([
//   {
//     level: 6,
//     order: [
//       "class CodePazuru{",
//       "public:",
//       "void function1(long long a[], long long b[], int n, int m){",
//       "int gap = (n + m + 1) / 2;",
//       "while (gap) {",
//       "int i = 0, j = gap;",
//       "while (j < (n + m)) ",
//       "{ \n if (i < n && j < n) {",
//       "if (a[i] > a[j]) swap(a[i], a[j]); \n }",
//       "else if (i < n && j >= n) {",
//       "if (a[i] > b[j - n]) swap(a[i], b[j - n]); \n }",
//       "else{ ",
//       "if (b[i - n] > b[j - n]) swap(b[i - n], b[j - n]); \n }",
//       "++i; \n ++j; \n}",
//       "gap = gap < 2 ? 0 : (gap + 1) / 2; \n } \n } ",
//       "};",
//     ],
//     code: [
//       "else if (i < n && j >= n) {",
//       "void function1(long long a[], long long b[], int n, int m){",
//       "public:",
//       "int i = 0, j = gap;",
//       "int gap = (n + m + 1) / 2;",
//       "if (a[i] > b[j - n]) swap(a[i], b[j - n]); \n }",
//       "else{ ",
//       "gap = gap < 2 ? 0 : (gap + 1) / 2; \n } \n } ",
//       "if (a[i] > a[j]) swap(a[i], a[j]); \n }",
//       "class CodePazuru{",
//       "++i; \n ++j; \n}",
//       "while (gap) {",
//       "while (j < (n + m)) ",
//       "};",
//       "{ \n if (i < n && j < n) {",
//       "if (b[i - n] > b[j - n]) swap(b[i - n], b[j - n]); \n }",
//     ],
//   },
// ]);
