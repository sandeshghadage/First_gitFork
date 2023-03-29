import styles from "./QuizePage.module.css";
import { useRef, useState } from "react";
import { Button } from "./Button";
import { Greet } from "./Greet";

export default function QuizePage() {
  const [count, setCount] = useState(0);
  const ansInd = useRef(0);
  const [checked, setChecked] = useState([false, false, false, false]);
  const [greetIsVisible, setGreetIsVisible] = useState(false);
  const [reset, setReset] = useState(false);
  const total = useRef(0);
  const questionsData = [
    {
      question_no: 1,
      question: "Which of these best describes an array?",
      options: [
        "A data structure that shows a hierarchical behavior",
        "Container of objects of similar types",
        "Arrays are immutable once initialised",
        "Array is not a data structure",
      ],
      correct_answer: 1,
    },
    {
      question_no: 2,
      question: "How do you initialize an array in C?",
      options: [
        "int arr[3] = (1,2,3);",
        "int arr(3) = {1,2,3};",
        "int arr[3] = {1,2,3};",
        "int arr(3) = (1,2,3);",
      ],
      correct_answer: 2,
    },
    {
      question_no: 3,
      question: "How do you instantiate an array in Java?",
      options: [
        "int arr[] = new int(3);",
        "int arr[];",
        "int arr[] = new int[3];",
        "int arr() = new int(3);",
      ],
      correct_answer: 2,
    },
    {
      question_no: 4,
      question:
        "Which of the following is the correct way to declare a multidimensional array in Java?",
      options: ["int[] arr;", "int arr[[]];", "int[][]arr;", "int[[]] arr;"],
      correct_answer: 2,
    },
    {
      question_no: 5,
      question: "What is the output of the following Java code?",
      options: ["3 and 5", "5 and 3", "2 and 4", "4 and 2"],
      correct_answer: 0,
    },
    {
      question_no: 6,
      question: "What is the output of the following Java code?",
      options: [
        "4",
        "5",
        "ArrayIndexOutOfBoundsException",
        "InavlidInputException",
      ],
      correct_answer: 2,
    },
    {
      question_no: 7,
      question: "When does the ArrayIndexOutOfBoundsException occur?",
      options: [
        "Compile-time",
        "Run-time",
        "Not an error",
        "Not an exception at all",
      ],
      correct_answer: 1,
    },
    {
      question_no: 8,
      question: "Which of the following concepts make extensive use of arrays?",
      options: [
        "Binary trees",
        "Scheduling of processes",
        "Caching",
        "Spatial locality",
      ],
      correct_answer: 3,
    },
    {
      question_no: 9,
      question: "What are the advantages of arrays?",
      options: [
        "Objects of mixed data types can be stored",
        "Elements in an array cannot be sorted",
        "Index of first element of an array is 1",
        "Easier to store elements of same data type",
      ],
      correct_answer: 3,
    },
    {
      question_no: 10,
      question: "What are the disadvantages of arrays?",
      options: [
        "Data structure like queue or stack cannot be implemented",
        "There are chances of wastage of memory space if elements inserted in an array are lesser than the allocated size",
        "Index value of an array can be negative",
        "Elements are sequentially accessed",
      ],
      correct_answer: 1,
    },
  ];

  const handleSelect = (i) => {
    const test = [...checked];
    for (let j = 0; j < test.length; j++) {
      test[j] = false;
    }
    test[i] = true;
    setChecked(test);
  };

  const handleNextClick = () => {
    if (count <= 8) {
      setCount(count + 1);
    }

    const ans = [...checked];
    for (let i = 0; i < 4; i++) {
      if (ans[i] === true) {
        ansInd.current = i;
        break;
      }
    }
    if (ansInd.current === questionsData[count].correct_answer) {
      total.current = total.current + 2;
      //   console.log("right answer");
    }
    // console.log(total, checked, questionsData[count].correctAnswer, ansInd);
  };
  const handleSubmitClick = () => {
    if (total.current >= 12) setGreetIsVisible(true);
    else {
      setReset(true);
    }
  };

  const handleReset = () => {
    setCount(0);
    setChecked([false, false, false, false]);
    setReset(false);
    total.current = 0;
  };

  return (
    <div className={styles.mainBody}>
      <div className={styles.Container}>
        <div className={styles.queNumber}>Question({count + 1})</div>
        <h3>{questionsData[count].question}</h3>
        {questionsData[count].options.map((ele, index) => (
          <form>
            <label>
              <input
                required="required"
                onClick={() => handleSelect(index)}
                checked={checked[index]}
                type={"radio"}
              />
              {ele}
            </label>
          </form>
        ))}
        <div
          style={count > 8 ? { display: "none" } : {}}
          className={styles.nextBtnDiv}
        >
          <Button class="nextBtn" func={handleNextClick} text="Next" />
        </div>

        <div
          style={count > 8 ? {} : { display: "none" }}
          className={styles.submitBtnDiv}
        >
          <Button class="submitBtn" func={handleSubmitClick} text="Submit" />
        </div>
        <div
          style={greetIsVisible ? {} : { display: "none" }}
          className={styles.greetDiv}
        >
          <Greet total={total.current} />
        </div>
        <div
          style={reset ? {} : { display: "none" }}
          className={styles.resetDiv}
        >
          <h1>Better Luck Next Time</h1>
          <h4>You got {total.current} out of 20 marks</h4>
          <h5>Click on the Reset Button to retry</h5>
          <Button text="Reset" class="resetBtn" func={() => handleReset()} />
        </div>
      </div>
    </div>
  );
}
