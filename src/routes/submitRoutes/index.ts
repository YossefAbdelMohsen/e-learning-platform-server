import { Router } from "express";
import { createSubmitRouter } from "./createSubmit";
import { protect } from "../../middlewares/auth";
import { getSubmitsByLessonRouter } from "./getSubmitsByLesson";
import { ReviewSubmitRouter } from "./reviewSubmit";

const submitRouter = Router();

submitRouter.use(protect);
submitRouter.use(createSubmitRouter);
submitRouter.use(getSubmitsByLessonRouter);
submitRouter.use(ReviewSubmitRouter);

export { submitRouter };
